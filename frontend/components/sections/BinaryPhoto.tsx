// components/portfolio/BinaryPhoto.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';

interface BinaryPhotoProps {
  photoUrl?: string;
  binary?: boolean;
  pixelSize?: number;
}

export default function BinaryPhoto({ photoUrl = 'SAM07634.JPG', binary = true, pixelSize = 10 }: BinaryPhotoProps) {
  const [pixels, setPixels] = useState<Array<{x: number, y: number, color: string, binary: number}>>([]);
  const [showBinary, setShowBinary] = useState(binary);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = photoUrl;
    img.onload = () => {
      const width = 32, height = 32;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0, width, height);
      const data = ctx.getImageData(0, 0, width, height).data;
      const px = [];
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          const [r, g, b, a] = [data[idx], data[idx+1], data[idx+2], data[idx+3]];
          if (a > 100) {
            const avg = (r + g + b) / 3;
            px.push({ x, y, color: `rgb(${r},${g},${b})`, binary: avg > 127 ? 1 : 0 });
          } else {
            px.push({ x, y, color: 'rgba(0,0,0,0)', binary: 0 });
          }
        }
      }
      setPixels(px);
    };
  }, [photoUrl]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-64 h-64 bg-black/40 md:w-80 md:h-80">
      <button
        className="absolute z-10 top-2 right-2 px-3 py-1 bg-white/80 rounded text-sm font-medium"
        onClick={() => setShowBinary(s => !s)}
        aria-label="Toggle binary/photo"
      >
        {showBinary ? 'Show Photo' : 'Show Binary'}
      </button>
      <div className="w-full h-full grid grid-cols-32 grid-rows-32">
        {pixels.map((p, i) => {
          const style = {
            width: `${100/32}%`,
            height: `${100/32}%`,
            background: showBinary ? (p.binary ? '#ccc' : '#222') : p.color,
            transition: 'background 0.3s',
            borderRadius: '10%',
          };
          return (
            <div
              key={i}
              style={style}
              className="group"
              tabIndex={0}
              aria-label={`pixel ${p.x},${p.y}`}
            />
          );
        })}
      </div>
    </div>
  );
}