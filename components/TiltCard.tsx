'use client';

import { useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  shadow?: boolean;
  glowColor?: string;
}

export default function TiltCard({ 
  children, 
  className = '',
  maxTilt = 10,
  scale = 1.05,
  shadow = true,
  glowColor = 'rgba(59, 130, 246, 0.5)'
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  
  const springConfig = { damping: 10, stiffness: 100 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    
    x.set(mouseX);
    y.set(mouseY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      animate={{
        scale: isHovered ? scale : 1
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full"
      >
        {/* Shadow layer */}
        {shadow && (
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: isHovered 
                ? `0 20px 40px -15px ${glowColor}` 
                : '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: -1 }}
          />
        )}
        
        {/* Content with 3D effect */}
        <div style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>
        
        {/* Shine effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: `linear-gradient(
                105deg,
                transparent 40%,
                rgba(255, 255, 255, 0.1) 50%,
                transparent 60%
              )`,
              transform: "translateZ(60px)"
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
