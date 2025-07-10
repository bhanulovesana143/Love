import React, { useRef, useEffect } from "react";

export const InteractiveParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let particles = [];
    let animationId;

    const width = window.innerWidth;
    const height = window.innerHeight;
    c.width = width;
    c.height = height;

    const heartCount = Math.floor((width * height) / 1600); // Denser effect

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 5 + 3;
        this.alpha = Math.random() * 0.5 + 0.5;
        this.time = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.color = this.randomColor();
      }

      randomColor() {
        const shades = [
          "255,105,180",   // Hot Pink
          "255,182,193",   // Light Pink
          "255,20,147",    // Deep Pink
          "255,128,171",   // Pastel Pink
          "255,192,203"    // Blush
        ];
        return shades[Math.floor(Math.random() * shades.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.time += this.pulseSpeed;
        this.size = 3 + Math.sin(this.time * 2) * 1.5;

        if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
          this.reset();
        }
      }

      drawHeart(ctx) {
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
        ctx.shadowColor = `rgba(${this.color}, 0.7)`;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();
      }
    }

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < heartCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Create a subtle gradient trail
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(10,10,30,0.3)");
      gradient.addColorStop(1, "rgba(30,0,30,0.3)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.drawHeart(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      createParticles();
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
        background: "radial-gradient(circle at center, #0b001f 0%, #000 100%)",
      }}
    />
  );
};
