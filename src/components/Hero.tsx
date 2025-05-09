
import React from 'react';
import SplineCanvas from './SplineCanvas';
import Tagline from './Tagline';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-unsighted-dark via-unsighted-dark/95 to-unsighted-dark z-10"></div>
      
      {/* Background animation instead of Spline */}
      <div className="absolute inset-0">
        <SplineCanvas className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center mt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          <span className="text-unsighted-light">Lighting up</span> the world
        </h1>
        
        <Tagline className="mb-12" />
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button className="bg-unsighted-light text-unsighted-dark hover:bg-unsighted-highlight px-8 py-6">
            Get Started
          </Button>
          <Button variant="outline" className="border-unsighted-light text-unsighted-light hover:bg-unsighted-light hover:text-unsighted-dark px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-pulse-light">
        <div className="w-6 h-10 border-2 border-unsighted-light rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-unsighted-light rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
