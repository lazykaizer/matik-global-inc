'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface SilkBackgroundProps {
  className?: string;
  showContent?: boolean;
  children?: React.ReactNode;
  speed?: number;
  colorTheme?: 'blue' | 'black' | 'purple';
}

export const Component = ({
  className = '',
  showContent = true,
  children,
  speed = 0.012,
  colorTheme = 'black',
}: SilkBackgroundProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const currentSpeed = speed;
    const scale = 2;
    const noiseIntensity = 0.8;
    const G = 2.71828;

    const resizeCanvas = () => {
      // Internal rendering at half resolution for smooth 60 FPS performance with woven mesh grain
      canvas.width = Math.max(320, Math.floor(window.innerWidth * 0.5));
      canvas.height = Math.max(180, Math.floor(window.innerHeight * 0.5));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    const animate = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Base gradient based on theme
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (colorTheme === 'blue') {
        gradient.addColorStop(0, '#040B1E');
        gradient.addColorStop(0.5, '#0B2050');
        gradient.addColorStop(1, '#050D24');
      } else {
        gradient.addColorStop(0, '#141414');
        gradient.addColorStop(0.5, '#222222');
        gradient.addColorStop(1, '#141414');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Create silk woven pattern
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const tOffset = currentSpeed * time;

      for (let x = 0; x < width; x += 2) {
        const u = (x / width) * scale;
        const tex_x = u;
        const sin_x = 0.03 * Math.sin(8.0 * tex_x - tOffset);
        const rx = G * Math.sin(G * x);
        const x_factor = 1 + x;

        for (let y = 0; y < height; y += 2) {
          const v = (y / height) * scale;
          const tex_y = v + sin_x;

          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 * (tex_x + tex_y + Math.cos(3.0 * tex_x + 5.0 * tex_y) + 0.08 * tOffset) +
            Math.sin(20.0 * (tex_x + tex_y - 0.15 * tOffset))
          );

          const ry = G * Math.sin(G * y);
          const rnd = (rx * ry * x_factor) % 1;
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

          let r: number, g: number, b: number;
          if (colorTheme === 'blue') {
            // Matic Diamond Blue silk cubes
            r = Math.floor(18 + 43 * intensity);
            g = Math.floor(65 + 130 * intensity);
            b = Math.floor(140 + 115 * intensity);
          } else {
            // Original purple-gray silk cubes
            r = Math.floor(123 * intensity);
            g = Math.floor(116 * intensity);
            b = Math.floor(129 * intensity);
          }
          const a = 255;

          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = a;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Add subtle radial overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      if (colorTheme === 'blue') {
        overlayGradient.addColorStop(0, 'rgba(5, 13, 36, 0.0)');
        overlayGradient.addColorStop(1, 'rgba(5, 13, 36, 0.45)');
      } else {
        overlayGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        overlayGradient.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
      }

      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorTheme, speed]);

  const bgClass = colorTheme === 'blue' ? 'bg-[#050B1A]' : 'bg-black';

  return (
    <>
      <style>{`
        .silk-container,
        .silk-container * {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUpDelay {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInCorner {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUpDelay 1s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-corner {
          animation: fadeInCorner 1s ease-out 0.9s forwards;
        }
        
        .silk-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      `}</style>

      <div className={`silk-container relative w-full overflow-hidden ${bgClass} ${className || (showContent ? 'h-screen' : 'h-full')}`}>
        {/* Animated Silk Canvas with pixelated cubes / woven mesh grid */}
        <canvas
          ref={canvasRef}
          className="silk-canvas"
          style={{ imageRendering: 'pixelated' }}
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 z-10 pointer-events-none ${
          colorTheme === 'blue'
            ? 'bg-gradient-to-b from-[#050B1A]/25 via-transparent to-[#050B1A]/45'
            : 'bg-gradient-to-b from-black/30 via-transparent to-black/50'
        }`} />

        {/* Render children if any */}
        {children}

        {/* Content (Title, Subtitle & Corner Accent when showContent=true) */}
        {showContent && (
          <>
            <div className="relative z-20 flex h-full items-center justify-center">
              <div className="text-center px-8">
                {/* Main Title */}
                <h1
                  className={`
                    text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 
                    font-light tracking-[-0.05em] leading-none
                    text-white mix-blend-difference
                    opacity-0
                    ${isLoaded ? 'animate-fade-in-up' : ''}
                  `}
                  style={{
                    textShadow: '0 0 40px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  silk
                </h1>

                {/* Subtitle */}
                <div
                  className={`
                    mt-8 text-lg md:text-xl lg:text-2xl 
                    font-extralight tracking-[0.2em] uppercase
                    text-gray-300/80 mix-blend-overlay
                    opacity-0
                    ${isLoaded ? 'animate-fade-in-up-delay' : ''}
                  `}
                >
                  <span className="inline-block">flowing</span>
                  <span className="mx-4 text-gray-500">•</span>
                  <span className="inline-block">texture</span>
                  <span className="mx-4 text-gray-500">•</span>
                  <span className="inline-block">art</span>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div
              className={`
                absolute top-8 left-8 z-30
                text-xs font-light tracking-widest uppercase
                text-gray-500/40 mix-blend-overlay
                opacity-0
                ${isLoaded ? 'animate-fade-in-corner' : ''}
              `}
            >
              2025
            </div>
          </>
        )}
      </div>
    </>
  );
};

export const SilkBackgroundAnimation = Component;
export default Component;
