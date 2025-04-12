
import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineCanvasProps {
  scene: string;
  className?: string;
}

const SplineCanvas: React.FC<SplineCanvasProps> = ({ scene, className }) => {
  return (
    <div className={className}>
      <Spline scene={scene} />
    </div>
  );
};

export default SplineCanvas;
