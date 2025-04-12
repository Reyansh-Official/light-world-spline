
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-unsighted-muted py-12 border-t border-unsighted-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="sm" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Lighting up the world one at a time. Bringing visibility to what matters most.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-unsighted-light">Home</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-unsighted-light">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-unsighted-light">Projects</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-unsighted-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">hello@unsighted.com</li>
              <li className="text-sm text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-unsighted-muted/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} unSighted. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
