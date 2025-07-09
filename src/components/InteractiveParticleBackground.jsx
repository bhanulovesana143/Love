import React, { useRef, useEffect } from "react";

export const InteractiveParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let hearts = [];
    let animationId;

    const heartCount = Math.floor((window.innerWidth * window.innerHeight) / 2000); // More hearts!

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    class Heart {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * c.width;
        this.y = Math.random() * c.height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.baseSize = Math.random() * 4 + 3;
        this.size = this.baseSize;
        this.alpha = Math.random() * 0.3 + 0.7;
        this.color = this.randomColor();
        this.pulse = Math.random() * 0.02 + 0.005;
        this.time = 0;
      }
      randomColor() {
        const pinkShades = [
          "255,105,180", // Hot Pink
          "255,182,193", // Light Pink
          "255,20,147",  // Deep Pink
          "255,128,171", // Pastel
          "255,192,203"  // Soft Blush
        ];
        return pinkShades[Math.floor(Math.random() * pinkShades.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.time += this.pulse;
        this.size = this.baseSize + Math.sin(this.time * 2) * 1.5;

        if (
          this.x < -50 ||
          this.x > c.width + 50 ||
          this.y < -50 ||
          this.y > c.height + 50
        ) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.size / 10, this.size / 10);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
        ctx.bezierCurveTo(-5, 3, 0, 5, 0, 7);
        ctx.bezierCurveTo(0, 5, 5, 3, 5, 0);
        ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
        ctx.closePath();
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.shadowColor = `rgba(${this.color}, 0.6)`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }
    }

    const createHearts = () => {
      hearts = [];
      for (let i = 0; i < heartCount; i++) {
        hearts.push(new Heart());
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, c.width, c.height);
      hearts.forEach((h) => {
        h.update();
        h.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    createHearts();
    animate();

    const handleResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      createHearts();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#000",
      }}
    />
  );
};
