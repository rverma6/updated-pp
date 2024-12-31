import React, { useEffect, useState } from 'react';

const Cursor = ({ isActive }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Set cursor style on mount
    document.documentElement.style.setProperty('cursor', 'none', 'important');
    document.body.style.setProperty('cursor', 'none', 'important');
    
    // Add event listener
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isActive ? 1.5 : 1})`,
        border: '1px solid white',
        borderRadius: '50%',
        transition: 'transform 150ms ease-out',
        cursor: 'none'
      }}
    />
  );
};

export default Cursor; 