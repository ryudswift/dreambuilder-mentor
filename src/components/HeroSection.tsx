
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 gradient-bg py-16">
      <div className="w-24 h-24 bg-coach-yellow rounded-full mb-8 flex items-center justify-center">
        <span className="text-4xl font-black text-coach-dark">H</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight inline-flex flex-wrap justify-center">
        <span className="mr-2">Meet</span>
        <span className="px-3 py-1 bg-coach-dark text-coach-yellow">HORMAX</span>
      </h1>
      
      <p className="text-xl mb-12 max-w-2xl font-bold">
        The AI That Will <span className="text-coach-dark bg-coach-yellow px-2">100X YOUR PRODUCTIVITY</span> Or Die Trying
      </p>
      
      <div className="relative w-full max-w-3xl mb-16 rounded-xl overflow-hidden shadow-lg border-2 border-coach-yellow">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl">
          <div className="w-full h-full bg-gradient-to-br from-coach-dark to-black flex items-center justify-center">
            <div className="text-coach-yellow text-lg font-bold px-8 py-4">
              "I turned $0 into $100M using these exact principles. HORMAX will force-feed them to you."
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-xl font-bold mb-8">
        Trusted By Tech Founders Who Actually Make Money
      </p>
      
      <div className="flex justify-center space-x-6 mb-12">
        {Array(8).fill(0).map((_, i) => (
          <span key={i} className="text-coach-yellow text-2xl">★</span>
        ))}
      </div>
      
      <h2 className="text-3xl font-black mb-8">
        RECLAIM YOUR TIME. MAXIMIZE YOUR OUTPUT.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">SIMPLIFY</h3>
          <p>Cut through the BS and focus on what actually moves the needle</p>
        </div>
        
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">SCALE</h3>
          <p>Deploy systems that work while you sleep (or surf Reddit)</p>
        </div>
        
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">DOMINATE</h3>
          <p>Crush competition with ruthless efficiency and moral ambiguity</p>
        </div>
      </div>
      
      <h2 className="text-3xl font-black mb-8">
        RESULTS OR IT DIDN'T HAPPEN
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-16">
        <div className="stat-card">
          <div className="stat-value">247%</div>
          <div className="stat-label">Average productivity increase</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100X</div>
          <div className="stat-label">Return on time invested</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3.5</div>
          <div className="stat-label">Hours reclaimed daily</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$0</div>
          <div className="stat-label">Excuses accepted</div>
        </div>
      </div>
      
      <Button 
        onClick={onGetStarted}
        size="lg" 
        className="text-lg px-8 py-6 black-button flex items-center gap-2"
      >
        GET MAXIMUM VALUE NOW
        <ArrowDownIcon size={20} />
      </Button>
    </div>
  );
};

export default HeroSection;
