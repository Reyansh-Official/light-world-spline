
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={cn('font-bold tracking-tight flex items-center', sizeClasses[size], className)}>
      <span className="strike-through mr-0.5">un</span>
      <span className="text-unsighted-light">Sighted</span>
    </div>
  );
};

export default Logo;
