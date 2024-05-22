import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }) => {
  const magnetic = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (magnetic.current) {
      const element = magnetic.current;
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo.current(x * 0.35);
      yTo.current(y * 0.35);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (magnetic.current) {
      xTo.current(0);
      yTo.current(0);
    }
  }, []);

  useEffect(() => {
    if (magnetic.current) {
      const element = magnetic.current;

      xTo.current = gsap.quickTo(element, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      yTo.current = gsap.quickTo(element, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseMove, handleMouseLeave]);

  if (!React.isValidElement(children)) {
    console.error("Magnetic component expects a single React element as a child.");
    return null;
  }

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;


