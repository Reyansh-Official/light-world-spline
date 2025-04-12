
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineCanvasProps {
  scene: string;
  className?: string;
}

const SplineCanvas: React.FC<SplineCanvasProps> = ({ scene, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    console.error("Failed to load Spline scene");
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className={className}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-unsighted-light border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <FallbackWaveAnimation />
      ) : (
        <Spline 
          scene={scene} 
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

// Fallback CSS wave animation when Spline fails to load
const FallbackWaveAnimation: React.FC = () => {
  return (
    <div className="wave-container w-full h-full flex items-center justify-center">
      <div className="wave-animation">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className="wave-line"
            style={{
              animationDelay: `${i * 0.1}s`,
              backgroundColor: `hsl(${i * 12}, 80%, 60%)`,
              height: '2px',
              width: '100%',
              position: 'absolute',
              transform: `translateY(${i * 5}px) translateZ(${i * 2}px)`,
              opacity: 1 - (i * 0.04),
              animation: 'wave 3s ease-in-out infinite'
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes wave {
            0% {
              transform: translateY(0) scaleX(1) rotateX(0deg);
            }
            50% {
              transform: translateY(10px) scaleX(0.9) rotateX(5deg);
            }
            100% {
              transform: translateY(0) scaleX(1) rotateX(0deg);
            }
          }
          .wave-animation {
            position: relative;
            width: 80%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
          }
        `}
      </style>
    </div>
  );
};

export default SplineCanvas;
