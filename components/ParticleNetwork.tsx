'use client';

import { useEffect, useRef } from 'react';

interface ParticleNetworkProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  lineColor?: string;
  speed?: number;
  minDistance?: number;
}

export default function ParticleNetwork({
  className = '',
  particleCount = 30, // Reduced from 50 to 30 for performance
  particleColor = 'rgba(147, 51, 234, 0.6)',
  lineColor = 'rgba(59, 130, 246, 0.2)',
  speed = 0.5,
  minDistance = 150,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // To track visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isVisible = true; // Visibility flag

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 2 + 1;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        // Bounce off walls
        if (this.x + this.radius > this.canvasWidth || this.x - this.radius < 0) {
          this.vx = -this.vx;
        }
        if (this.y + this.radius > this.canvasHeight || this.y - this.radius < 0) {
          this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      particles = [];
      if (window.innerWidth < 768) return;
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y, canvas.width, canvas.height));
      }
    };

    const connectParticles = () => {
      if (window.innerWidth < 768) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < minDistance) {
            const opacity = 1 - distance / minDistance;
            ctx.strokeStyle = lineColor.replace('0.2', (opacity * 0.2).toString());
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      if (!isVisible) return; // Skip if not visible
      if (window.innerWidth < 768) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      if (window.innerWidth < 768) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = [];
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    // Intersection Observer setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          // Restart animation loop if it was stopped
          cancelAnimationFrame(animationFrameId);
          animate();
        }
      });
    }, { threshold: 0 });

    if (canvas) {
      observer.observe(canvas);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return; // optimization
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
        }
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [particleCount, particleColor, lineColor, speed, minDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}
