import React, { useEffect, useRef } from 'react';

export default function CursorThreadTrail() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: performance.now()
      });
      // Update CSS sunbeam coordinates on document root
      document.documentElement.style.setProperty('--sunbeam-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--sunbeam-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animId;
    const render = (now) => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Filter out points older than 600ms
      pointsRef.current = pointsRef.current.filter((p) => now - p.time < 600);

      const points = pointsRef.current;
      if (points.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        // Curve smoothly between points
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
      }

      ctx.strokeStyle = '#B8A48C';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 5]); // 1.5px dashed running stitch
      ctx.stroke();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-9995"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
