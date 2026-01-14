'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'hover' | 'view' | 'text';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      moveCursor(e);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Handle cursor variant changes based on hovered elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for data-cursor attribute first
      const cursorAttr = target.closest('[data-cursor]');
      if (cursorAttr) {
        setVariant(
          cursorAttr.getAttribute('data-cursor') as CursorVariant
        );
        return;
      }

      // Check for interactive elements
      const isLink = target.closest('a, button, [role="button"]');
      const isInput = target.closest(
        'input, textarea, select, [contenteditable="true"]'
      );

      if (isInput) {
        setVariant('text');
      } else if (isLink) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        'mouseenter',
        handleMouseEnter
      );
    };
  }, [isTouchDevice, moveCursor]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(59, 130, 246, 1)',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      mixBlendMode: 'normal' as const,
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(59, 130, 246, 0.9)',
      mixBlendMode: 'normal' as const,
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: 'rgba(59, 130, 246, 1)',
      mixBlendMode: 'normal' as const,
      borderRadius: 2,
    },
  };

  return (
    <>
      {/* Hide default cursor globally */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          ...variants[variant],
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
          opacity: { duration: 0.2 },
        }}
      >
        {variant === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-xs font-medium text-white"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Cursor dot follower for smooth effect */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1 w-1 rounded-full bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible && variant !== 'text' ? 0.5 : 0,
          scale: variant === 'hover' || variant === 'view' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
