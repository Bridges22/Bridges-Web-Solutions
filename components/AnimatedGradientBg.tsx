'use client';

import { useEffect, useRef } from 'react';

interface AnimatedGradientBgProps {
  className?: string;
  variant?: 'waves' | 'mesh' | 'aurora' | 'orb';
  opacity?: number;
}

export default function AnimatedGradientBg({
  className = '',
  variant = 'waves',
  opacity = 0.3
}: AnimatedGradientBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (variant === 'waves') {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;
      let time = 0;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const drawWave = (offset: number, amplitude: number, frequency: number, color: string) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin((x * frequency) + time + offset) * amplitude + (canvas.height / 2);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      };

      const animate = () => {
        if (!isVisible) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw multiple waves with enhanced colors and amplitude
        drawWave(0, 60, 0.01, 'rgba(59, 130, 246, 0.25)'); // Blue - more visible
        drawWave(1, 50, 0.015, 'rgba(147, 51, 234, 0.20)'); // Purple - more visible
        drawWave(2, 40, 0.02, 'rgba(236, 72, 153, 0.15)'); // Pink - more visible
        drawWave(3, 35, 0.012, 'rgba(34, 211, 238, 0.12)'); // Cyan - additional wave

        time += 0.02;
        animationFrameId = requestAnimationFrame(animate);
      };

      // Intersection Observer setup
      let isVisible = true;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            cancelAnimationFrame(animationFrameId);
            animate();
          }
        });
      }, { threshold: 0 });

      observer.observe(canvas);

      resize();
      animate();
      window.addEventListener('resize', resize);

      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
        observer.disconnect();
      };
    }
  }, [variant]);

  if (variant === 'mesh') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <div className="absolute -inset-[10px] opacity-70">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob shadow-2xl shadow-purple-500/50" />
          <div className="absolute top-0 -right-4 w-80 h-80 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 shadow-2xl shadow-blue-500/50" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-pink-600 to-rose-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000 shadow-2xl shadow-pink-500/50" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-gradient-to-br from-indigo-600 to-purple-400 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-1000 shadow-2xl shadow-indigo-500/50" />
        </div>
      </div>
    );
  }

  if (variant === 'aurora') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/50" />
        </div>
      </div>
    );
  }

  if (variant === 'orb') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <div className="relative h-full w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute h-[800px] w-[800px] rounded-full bg-gradient-radial from-blue-500/30 to-transparent animate-pulse-slow" />
              <div className="absolute h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-500/20 to-transparent animate-pulse-slower animation-delay-1000" />
              <div className="absolute h-[400px] w-[400px] rounded-full bg-gradient-radial from-pink-500/10 to-transparent animate-pulse-slowest animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ opacity }}
    />
  );
}
