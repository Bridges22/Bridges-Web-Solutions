'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);
  
  if (!mounted) return null;
  
  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }
  
  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="relative w-full h-full">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm opacity-80" />
          
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-40" />
          
          {/* Core */}
          <div className="absolute inset-2 bg-white rounded-full" />
        </div>
      </motion.div>
      
      {/* Trail effect */}
      <motion.div
        className="fixed w-40 h-40 pointer-events-none z-40"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </>
  );
}
