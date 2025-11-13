'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface ParallaxContextType {
  scrollY: any;
  mouseX: any;
  mouseY: any;
}

const ParallaxContext = createContext<ParallaxContextType | undefined>(undefined);

export const useParallax = () => {
  const context = useContext(ParallaxContext);
  if (!context) {
    throw new Error('useParallax must be used within ParallaxProvider');
  }
  return context;
};

interface ParallaxProviderProps {
  children: ReactNode;
}

export function ParallaxProvider({ children }: ParallaxProviderProps) {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  return (
    <ParallaxContext.Provider value={{ scrollY, mouseX, mouseY }}>
      {children}
    </ParallaxContext.Provider>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

export function ParallaxLayer({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0 
}: ParallaxLayerProps) {
  const { scrollY } = useParallax();
  const y = useTransform(scrollY, [0, 1000], [offset, offset + (1000 * speed)]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return (
    <motion.div
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MouseTiltProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
}

export function MouseTilt({ 
  children, 
  className = '',
  maxTilt = 3,
  perspective = 1000
}: MouseTiltProps) {
  const { mouseX, mouseY } = useParallax();
  
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  
  return (
    <motion.div
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
