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
    const shapes = {
      'square': (x, y, size) => this.ctx.rect(x - size / 2, y - size / 2, size, size),
      'circle': (x, y, size) => this.ctx.arc(x, y, size, 0, Math.PI * 2),
      'hexagon': (x, y, size) => this.drawPolygon(x, y, size, 6),
      'triangle-down': (x, y, size) => this.drawPolygon(x, y, size, 3, Math.PI),
      'triangle-up': (x, y, size) => this.drawPolygon(x, y, size, 3),
      'star': (x, y, size) => this.drawStar(x, y, size, 5, size / 2),
    };
  
    const noiseX = Math.random() * this.noise;
    const noiseY = Math.random() * this.noise;
  
    this.particles.forEach(particle => {
      const currX = particle.currX;
      const currY = particle.currY;
      const { colors } = particle;
      const { red: r, green: g, blue: b } = colors;
  
      const dxMouse = this.mouse.x - currX;
      const dyMouse = this.mouse.y - currY;
      const absDistMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      const dxOrigin = particle.springOriginX - currX;
      const dyOrigin = particle.springOriginY - currY;
      const absDistOrigin = Math.sqrt(dxOrigin * dxOrigin + dyOrigin * dyOrigin);
  
      let xRepulse = (-5e5 * dxMouse) / (absDistMouse * absDistMouse * absDistMouse || 1);
      let yRepulse = (-5e5 * dyMouse) / (absDistMouse * absDistMouse * absDistMouse || 1);
      xRepulse = Math.max(Math.min(xRepulse, 4000), -4000);
      yRepulse = Math.max(Math.min(yRepulse, 4000), -4000);
  
      const vxOrigin = absDistOrigin === 0 ? 0 : this.returnSpeed * dxOrigin;
      const vyOrigin = absDistOrigin === 0 ? 0 : this.returnSpeed * dyOrigin;
  
      particle.currX += vxOrigin + xRepulse * this.push + (Math.random() < 0.5 ? -1 : 1) * noiseX;
      particle.currY += vyOrigin + yRepulse * this.push + (Math.random() < 0.5 ? -1 : 1) * noiseY;
  
      this.ctx.fillStyle = `rgba(${r},${g},${b},1)`;
      this.ctx.beginPath();
      shapes[this.particleType](currX, currY, this.particleSize);
      this.ctx.fill();
    });
  
    this.requestAnimationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  // drawPolygon(x, y, size, sides, rotation = 0) {
  //   this.ctx.save();
  //   this.ctx.translate(x, y);
  //   this.ctx.rotate(rotation);
  //   this.ctx.beginPath();
  //   for (let i = 0; i < sides; i++) {
  //     const angle = (Math.PI * 2 * i) / sides;
  //     this.ctx.lineTo(size * Math.cos(angle), size * Math.sin(angle));
  //   }
  //   this.ctx.closePath();
  //   this.ctx.restore();
  // }

  drawPolygon(x, y, size, sides, rotation = 0) {
    const ctx = this.ctx;
    const increment = Math.PI * 2 / sides;
    let angle = 0;
  
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
  
    for (let i = 0; i < sides; i++) {
      ctx.lineTo(size * Math.cos(angle), size * Math.sin(angle));
      angle += increment;
    }
  
    ctx.closePath();
    ctx.restore();
  }

  // drawStar(x, y, outerRadius, points, innerRadius) {
  //   this.ctx.beginPath();
  //   const angleIncrement = Math.PI / points;
  //   for (let i = 0; i < 2 * points; i++) {
  //     const radius = i % 2 === 0 ? outerRadius : innerRadius;
  //     const angle = i * angleIncrement;
  //     this.ctx.lineTo(
  //       x + radius * Math.cos(angle),
  //       y + radius * Math.sin(angle)
  //     );
  //   }
  //   this.ctx.closePath();
  // }

  drawStar(x, y, outerRadius, points, innerRadius) {
    this.ctx.beginPath();
    const angleIncrement = Math.PI / points;
    let isOuter = true;
    for (let i = 0; i < 2 * points; i++) {
      const radius = isOuter ? outerRadius : innerRadius;
      const angle = i * angleIncrement;
      this.ctx.lineTo(
        x + radius * Math.cos(angle),
        y + radius * Math.sin(angle)
      );
      isOuter = !isOuter;
    }
    this.ctx.closePath();
  }
}
