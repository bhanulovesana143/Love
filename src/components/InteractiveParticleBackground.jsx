import React, { useRef, useEffect } from "react";

export const InteractiveParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let particles = [];
    let animationId;
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    const maxDist = 150;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * c.width;
        this.y = Math.random() * c.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > c.width || this.y < 0 || this.y > c.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(${themeColor},${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    let themeColor = "0,0,0"; // dark theme default
    const updateTheme = () => {
      const dark = document.documentElement.classList.contains("dark");
      themeColor = dark ? "255,255,255" : "0,0,0";
      ctx.fillStyle = `rgba(${themeColor},0.7)`;
    };

    const animate = () => {
      updateTheme();
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
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
    const themeObserver = new MutationObserver(animate);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} style={{
    position: "fixed", top: 0, left: 0,
    width: "100%", height: "100%",
    zIndex: 0, pointerEvents: "none"
  }} />;
};
