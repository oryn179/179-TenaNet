import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (desktop)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is clickable or inside a clickable element
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Red Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-red rounded-full pointer-events-none z-[100]"
        style={{
          boxShadow: '0 0 10px rgba(255, 26, 26, 0.8)'
        }}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0.5 : 1
        }}
        transition={{
          type: "tween",
          duration: 0
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyber-red rounded-full pointer-events-none z-[100]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.5,
          backgroundColor: isHovering ? 'rgba(255, 26, 26, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(255, 26, 26, 0.9)' : 'rgba(255, 26, 26, 0.4)'
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5
        }}
      />
    </>
  );
};