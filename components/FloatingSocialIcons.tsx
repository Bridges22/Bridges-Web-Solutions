'use client';

import { useEffect, useState } from 'react';

interface FloatingSocialIconsProps {
  className?: string;
}

interface FloatingIcon {
  id: number;
  icon: string;
  color: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

export default function FloatingSocialIcons({ className = '' }: FloatingSocialIconsProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const socialIcons: FloatingIcon[] = [
    { id: 1, icon: 'ri-facebook-fill', color: '#1877F2', x: 10, y: 20, delay: 0, duration: 15, scale: 1.2 },
    { id: 2, icon: 'ri-twitter-x-line', color: '#000000', x: 85, y: 15, delay: 2, duration: 18, scale: 1 },
    { id: 3, icon: 'ri-instagram-line', color: '#E4405F', x: 70, y: 70, delay: 1, duration: 20, scale: 1.1 },
    { id: 4, icon: 'ri-linkedin-fill', color: '#0077B5', x: 15, y: 65, delay: 3, duration: 17, scale: 0.9 },
    { id: 5, icon: 'ri-youtube-fill', color: '#FF0000', x: 90, y: 45, delay: 1.5, duration: 19, scale: 1.15 },
    { id: 6, icon: 'ri-whatsapp-line', color: '#25D366', x: 45, y: 10, delay: 2.5, duration: 16, scale: 1 },
    { id: 7, icon: 'ri-tiktok-fill', color: '#000000', x: 30, y: 40, delay: 0.5, duration: 21, scale: 1.05 },
    { id: 8, icon: 'ri-pinterest-fill', color: '#E60023', x: 60, y: 35, delay: 4, duration: 14, scale: 0.95 },
    { id: 9, icon: 'ri-snapchat-fill', color: '#FFFC00', x: 80, y: 80, delay: 2, duration: 22, scale: 1.1 },
    { id: 10, icon: 'ri-telegram-fill', color: '#0088CC', x: 25, y: 85, delay: 3.5, duration: 18, scale: 1 },
  ];
  
  if (!mounted) return null;
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {socialIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animation: `floatRandom ${icon.duration}s ease-in-out ${icon.delay}s infinite`,
            transform: `scale(${icon.scale})`,
          }}
        >
          <div 
            className="relative group"
            style={{
              animation: `rotate360 ${icon.duration * 2}s linear infinite`,
            }}
          >
            <i 
              className={`${icon.icon} text-4xl`}
              style={{ 
                color: icon.color,
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
              }}
            />
            <div 
              className="absolute inset-0 blur-xl opacity-50"
              style={{ 
                background: icon.color,
                animation: `pulse ${icon.duration / 3}s ease-in-out infinite`,
              }}
            />
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatRandom {
          0%, 100% {
            transform: translate(0, 0) scale(var(--scale, 1));
          }
          20% {
            transform: translate(-30px, -40px) scale(calc(var(--scale, 1) * 1.1));
          }
          40% {
            transform: translate(40px, -20px) scale(calc(var(--scale, 1) * 0.95));
          }
          60% {
            transform: translate(-20px, 30px) scale(calc(var(--scale, 1) * 1.05));
          }
          80% {
            transform: translate(30px, 40px) scale(calc(var(--scale, 1) * 0.98));
          }
        }
        
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
