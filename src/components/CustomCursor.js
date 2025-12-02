'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const smoothCursor = () => {
      // Lerp for main cursor (smoothest)
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.08;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.08;

      // Lerp for trailing dot (faster)
      dot.current.x += (mouse.current.x - dot.current.x) * 0.18;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.18;

      // Update DOM directly (SUPER FAST)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      }

      requestAnimationFrame(smoothCursor);
    };

    requestAnimationFrame(smoothCursor);
  }, []);

  // Mouse events
  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    const over = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      }
    };

    const out = () => setIsHovering(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[100] rounded-full border-2
          ${isHovering ? 'w-12 h-12 bg-blue-500/20 border-blue-400' : 'w-4 h-4 border-blue-500'}
          ${isClicking ? 'scale-75' : 'scale-100'}
        `}
        style={{
          position: 'fixed',
          left: '-24px',
          top: '-24px',
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s, border 0.2s, background 0.2s, transform 0.2s',
        }}
      />

      {/* Trailing dot */}
      <div
        ref={dotRef}
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-[99]"
        style={{
        position: 'fixed',
        left: '-8px',
        top: '-8px',
        }}
      />
    </>
  );
}
