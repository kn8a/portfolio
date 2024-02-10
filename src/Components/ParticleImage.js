import React, { useEffect, useRef } from "react";
import Particles from "./particles.js";

const ParticleImage = ({
  width = 500,
  height = 300,
  src = null,
  particleSize = 3,
  push = 1 / 60,
  threshold = 60,
  particleType = "square",
  gap = 5,
  noise = 0.8,
  canvasWidth = 800,
  canvasHeight = 400,
  returnSpeed = 0.075,
}) => {
  const canvasRef = useRef(null);
  const liquidRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      liquidRef.current = new Particles({
        canvas: canvasRef.current,
        img: img,
        particleSize,
        push,
        width,
        height,
        threshold,
        particleType,
        gap,
        noise,
        canvasWidth,
        canvasHeight,
        returnSpeed,
      });
      setTimeout(() => {
        liquidRef?.current?.start();
      }, 100);
    };

    return () => {
      liquidRef?.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (liquidRef?.current) {
      liquidRef.current.stop();
      liquidRef?.current?.init({
        isUpdate: true,
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
        returnSpeed,
      });
      liquidRef?.current?.start();
    }
  }, [particleSize, push, noise, particleType, gap]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default ParticleImage;