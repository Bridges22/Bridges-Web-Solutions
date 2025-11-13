'use client';

import { useEffect, useRef } from 'react';

interface SurveillanceGridProps {
  className?: string;
  beamColor?: string;
  gridColor?: string;
  opacity?: number;
}

export default function SurveillanceGrid({ 
  className = '', 
  beamColor = 'rgba(34, 211, 238, 0.4)',
  gridColor = 'rgba(59, 130, 246, 0.1)',
  opacity = 0.5
}: SurveillanceGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let time = 0;
    let scanLineY = 0;
    
    // Grid properties
    const gridSize = 50;
    const beamWidth = 2;
    const scanSpeed = 2;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const drawGrid = () => {
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    
    const drawScanLine = () => {
      // Horizontal scan line
      const gradient = ctx.createLinearGradient(0, scanLineY - 20, 0, scanLineY + 20);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.5, beamColor);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLineY - 20, canvas.width, 40);
      
      // Glowing line
      ctx.strokeStyle = beamColor;
      ctx.lineWidth = beamWidth;
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, scanLineY);
      ctx.lineTo(canvas.width, scanLineY);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };
    
    const drawRadarSweep = () => {
      const centerX = canvas.width - 150;
      const centerY = 150;
      const radius = 100;
      
      // Draw radar circle
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw inner circles
      for (let r = 25; r < radius; r += 25) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw sweep
      const sweepAngle = (time * 0.02) % (Math.PI * 2);
      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      sweepGradient.addColorStop(0, beamColor);
      sweepGradient.addColorStop(1, 'transparent');
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(sweepAngle);
      
      ctx.fillStyle = sweepGradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, -Math.PI / 8, Math.PI / 8);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
      
      // Draw sweep line
      ctx.strokeStyle = beamColor;
      ctx.lineWidth = 2;
      ctx.shadowColor = beamColor;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      const endX = centerX + Math.cos(sweepAngle) * radius;
      const endY = centerY + Math.sin(sweepAngle) * radius;
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.shadowBlur = 0;
    };
    
    const drawTargetMarkers = () => {
      // Simulate random target positions
      const targets = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, active: Math.sin(time * 0.01) > 0 },
        { x: canvas.width * 0.6, y: canvas.height * 0.5, active: Math.sin(time * 0.015) > 0 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, active: Math.sin(time * 0.02) > 0 },
      ];
      
      targets.forEach((target) => {
        if (target.active) {
          // Draw target box
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.strokeRect(target.x - 20, target.y - 20, 40, 40);
          ctx.setLineDash([]);
          
          // Draw corner markers
          ctx.beginPath();
          ctx.moveTo(target.x - 30, target.y - 30);
          ctx.lineTo(target.x - 20, target.y - 30);
          ctx.lineTo(target.x - 30, target.y - 20);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(target.x + 30, target.y - 30);
          ctx.lineTo(target.x + 20, target.y - 30);
          ctx.lineTo(target.x + 30, target.y - 20);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(target.x - 30, target.y + 30);
          ctx.lineTo(target.x - 20, target.y + 30);
          ctx.lineTo(target.x - 30, target.y + 20);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(target.x + 30, target.y + 30);
          ctx.lineTo(target.x + 20, target.y + 30);
          ctx.lineTo(target.x + 30, target.y + 20);
          ctx.stroke();
        }
      });
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw elements
      drawGrid();
      drawScanLine();
      drawRadarSweep();
      drawTargetMarkers();
      
      // Update animations
      time++;
      scanLineY = (scanLineY + scanSpeed) % canvas.height;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    resize();
    animate();
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [beamColor, gridColor]);
  
  return (
    <canvas 
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  );
}
