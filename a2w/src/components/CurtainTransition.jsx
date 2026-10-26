import React, { useEffect, useState } from 'react';

export default function CurtainTransition({ isChanging, direction = 'right', isTheatrical = false }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isChanging) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-9990 pointer-events-none transition-all duration-700 ease-out ${
        isTheatrical
          ? 'bg-[#121110]'
          : 'bg-gradient-to-r from-[#F7F2EA]/95 via-[#E7B49A]/30 to-[#F7F2EA]/95 backdrop-blur-md'
      }`}
      style={{
        transform: isChanging ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: direction === 'right' ? 'left' : 'right',
        opacity: isChanging ? 1 : 0
      }}
    >
      {/* Sheer fabric wavy overlay */}
      <div className="w-full h-full opacity-30 bg-repeat bg-[radial-gradient(#B8A48C_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
}
