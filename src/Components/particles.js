export default class Particles {
  constructor({ canvas, img, ...rest }) {
    this.canvas = canvas;
    this.img = img;
    this.init(rest);
  }

  initProps({
    particleSize,
    push,
    width,
    height,
    threshold,
    particleType,
    gap,
    noise,
    canvasHeight,
    canvasWidth,
    returnSpeed
  }) {
    this.mouse = { x: -1000000000, y: -1000000000 };
    this.particles = [];
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.requestAnimationFrameId = -1;
    this.ctx.imageSmoothingEnabled = false;
    this.particleSize = particleSize;
    this.push = push;
    this.width = width;
    this.height = height;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.threshold = threshold;
    this.returnSpeed = returnSpeed;
    this.particleType = particleType;
    this.gap = gap;
    this.noise = noise;

    switch (particleType) {
      case 'square':
        this.step = this.particleSize;
        break;
      case 'circle':
        this.step = this.particleSize * 2;
        break;
      case 'hexagon':
        this.step = this.particleSize * 3;
        break;
      case 'triangle-down':
      case 'triangle-up':
        this.step = this.particleSize * 2;
        break;
      case 'star':
        this.step = this.particleSize * 4;
        break;
      default:
        this.step = this.particleSize;
    }
  }

  init({ isUpdate = false, ...props }) {
    this.initProps(props);
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.canvas.addEventListener(
      'mouseleave',
      this.handleMouseLeave.bind(this)
    );
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.ctx.drawImage(
      this.img,
      (this.canvasWidth - this.width) / 2,
      (this.canvasHeight - this.height) / 2,
      this.width,
      this.height
    );
    const imageData = this.ctx.getImageData(
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    );
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    for (let i = 0; i < this.canvasHeight; i += this.step + this.gap)
      for (let j = 0; j < this.canvasWidth; j += this.step + this.gap) {
        const r = imageData.data[4 * i * imageData.width + 4 * j];
        const g = imageData.data[4 * i * imageData.width + 4 * j + 1];
        const b = imageData.data[4 * i * imageData.width + 4 * j + 2];
        if (
          !(r <= this.threshold && g <= this.threshold && b <= this.threshold)
        ) {
          this.particles.push({
            currX: isUpdate ? j : Math.random() * this.canvasWidth,
            currY: isUpdate ? i : 0,
            springOriginX: j,
            springOriginY: i,
            colors: { red: r, green: g, blue: b },
          });
        }
      }
  }

  start() {
    this.render();
  }

  stop() {
    cancelAnimationFrame(this.requestAnimationFrameId);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseMove(t) {
    this.mouse.x = t.offsetX;
    this.mouse.y = t.offsetY;
  }

  handleMouseLeave() {
    this.mouse.x = -1000000000;
    this.mouse.y = -1000000000;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.particles.forEach(particle => {
      const { colors } = particle;
      const { red: r, green: g, blue: b } = colors;
      const dxMouse = this.mouse.x - particle.currX;
      const dyMouse = this.mouse.y - particle.currY;
      const absDistMouse = Math.sqrt(dxMouse ** 2 + dyMouse ** 2);
      const dxOrigin = particle.springOriginX - particle.currX;
      const dyOrigin = particle.springOriginY - particle.currY;
      const absDistOrigin = Math.sqrt(dxOrigin ** 2 + dyOrigin ** 2);
      let xRepulse = (-5e5 * dxMouse) / (absDistMouse ** 3 || 1);
      let yRepulse = (-5e5 * dyMouse) / (absDistMouse ** 3 || 1);
      xRepulse = Math.max(Math.min(xRepulse, 4e3), -4e3);
      yRepulse = Math.max(Math.min(yRepulse, 4e3), -4e3);
      const vxOrigin = 0 === absDistOrigin ? 0 : this.returnSpeed * dxOrigin;
      const vyOrigin = 0 === absDistOrigin ? 0 : this.returnSpeed * dyOrigin;
      particle.currX += vxOrigin + xRepulse * this.push;
      particle.currY += vyOrigin + yRepulse * this.push;
      const xc = Math.random() < 0.5 ? -1 : 1;
      const yc = Math.random() < 0.5 ? -1 : 1;
      this.noise && (particle.currX += Math.random() * this.noise * xc);
      this.noise && (particle.currY += Math.random() * this.noise * yc);
      this.ctx.fillStyle = `rgba(${r},${g},${b},1)`;
      this.ctx.beginPath();
      switch (this.particleType) {
        case 'square':
          this.ctx.rect(
            particle.currX - this.particleSize / 2,
            particle.currY - this.particleSize / 2,
            this.particleSize,
            this.particleSize
          );
          break;
        case 'circle':
          this.ctx.arc(
            particle.currX,
            particle.currY,
            this.particleSize,
            0,
            Math.PI * 2
          );
          break;
        case 'hexagon':
          this.drawPolygon(
            particle.currX,
            particle.currY,
            this.particleSize,
            6
          );
          break;
        case 'triangle-down':
          this.drawPolygon(
            particle.currX,
            particle.currY,
            this.particleSize,
            3,
            Math.PI
          );
          break;
        case 'triangle-up':
          this.drawPolygon(
            particle.currX,
            particle.currY,
            this.particleSize,
            3
          );
          break;
        case 'star':
          this.drawStar(
            particle.currX,
            particle.currY,
            this.particleSize,
            5,
            this.particleSize / 2
          );
          break;
        default:
          break;
      }
      this.ctx.fill();
    });
    this.requestAnimationFrameId = requestAnimationFrame(
      this.render.bind(this)
    );
  }

  drawPolygon(x, y, size, sides, rotation = 0) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI * 2 * i) / sides;
      this.ctx.lineTo(size * Math.cos(angle), size * Math.sin(angle));
    }
    this.ctx.closePath();
    this.ctx.restore();
  }

  drawStar(x, y, outerRadius, points, innerRadius) {
    this.ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * Math.PI) / points;
      this.ctx.lineTo(
        x + radius * Math.cos(angle),
        y + radius * Math.sin(angle)
      );
    }
    this.ctx.closePath();
  }
}
