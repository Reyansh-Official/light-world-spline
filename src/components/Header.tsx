
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-unsighted-dark/80 backdrop-blur-sm border-b border-unsighted-muted">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm hover:text-unsighted-light transition-colors">Home</a></li>
              <li><a href="#" className="text-sm hover:text-unsighted-light transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-unsighted-light transition-colors">Projects</a></li>
              <li><a href="#" className="text-sm hover:text-unsighted-light transition-colors">Contact</a></li>
            </ul>
          </nav>
          <Button size="sm" variant="outline" className="border-unsighted-light text-unsighted-light hover:bg-unsighted-light hover:text-unsighted-dark">
            Get Started
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
