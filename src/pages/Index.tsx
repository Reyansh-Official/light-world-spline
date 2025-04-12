
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-unsighted-dark to-unsighted-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How We Illuminate</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-unsighted-muted/50 p-6 rounded-lg border border-unsighted-muted/20 transition-all hover:border-unsighted-light/40 hover:bg-unsighted-muted/70">
                <div className="w-12 h-12 bg-unsighted-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-unsighted-light text-2xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover</h3>
                <p className="text-muted-foreground">Uncover hidden perspectives and insights that illuminate new possibilities.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-unsighted-muted/50 p-6 rounded-lg border border-unsighted-muted/20 transition-all hover:border-unsighted-light/40 hover:bg-unsighted-muted/70">
                <div className="w-12 h-12 bg-unsighted-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-unsighted-light text-2xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect</h3>
                <p className="text-muted-foreground">Bridge gaps between ideas and people to create meaningful connections.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-unsighted-muted/50 p-6 rounded-lg border border-unsighted-muted/20 transition-all hover:border-unsighted-light/40 hover:bg-unsighted-muted/70">
                <div className="w-12 h-12 bg-unsighted-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-unsighted-light text-2xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Illuminate</h3>
                <p className="text-muted-foreground">Bring clarity and light to complex challenges, one step at a time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
