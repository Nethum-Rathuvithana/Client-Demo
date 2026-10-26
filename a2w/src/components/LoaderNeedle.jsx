import React, { useEffect, useState } from 'react';

export default function LoaderNeedle({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 400); // needle enters
    const t2 = setTimeout(() => setStage(2), 1100); // thread stitches A to W
    const t3 = setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (stage === 3) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#F7F2EA] transition-opacity duration-700 ${
        stage === 2 ? 'opacity-90' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Needle & Thread SVG */}
        <svg className="w-48 h-32" viewBox="0 0 200 120" fill="none">
          {/* The Needle */}
          <g className={`transition-transform duration-700 ${stage >= 1 ? 'translate-x-4' : '-translate-x-12'}`}>
            <path
              d="M130,50 L175,50 C180,50 185,52 188,55 L195,60 L188,65 C185,68 180,70 175,70 L130,70 Z"
              fill="#1B1917"
            />
            {/* Needle Eye */}
            <ellipse cx="140" cy="60" rx="4" ry="1.5" fill="#F7F2EA" />
          </g>

          {/* Running Stitch Thread Passing Through Eye */}
          <path
            d="M10,60 Q70,20 140,60 T190,60"
            stroke="#B8A48C"
            strokeWidth="2"
            strokeDasharray="6 4"
            className="thread-animated"
          />
        </svg>

        {/* Stitched Logotype */}
        <div className="mt-4 text-center">
          <span className="font-serif text-3xl md:text-4xl tracking-widest text-[#1B1917] block">
            A to W
          </span>
          <span className="label-caps text-[10px] tracking-[0.3em] text-[#B8A48C] mt-1 block">
            {stage >= 2 ? 'THREAD CONNECTED · ENTERING GALLERY' : 'THREADING THE NEEDLE...'}
          </span>
        </div>
      </div>
    </div>
  );
}
