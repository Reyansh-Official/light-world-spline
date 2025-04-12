
import React from 'react';
import { cn } from '@/lib/utils';

interface TaglineProps {
  className?: string;
  animate?: boolean;
}

const Tagline: React.FC<TaglineProps> = ({ className, animate = true }) => {
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <h2 className={cn(
        'text-2xl md:text-3xl font-light tracking-wide',
        animate && 'animate-fade-in'
      )}>
        Lighting up the world
      </h2>
      <p className={cn(
        'text-lg md:text-xl font-light text-unsighted-light mt-2',
        animate && 'animate-fade-in'
      )}>
        one at a time
      </p>
    </div>
  );
};

export default Tagline;
