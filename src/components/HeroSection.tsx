
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 gradient-bg py-16">
      <div className="w-24 h-24 bg-coach-dark rounded-full mb-8"></div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight inline-flex flex-wrap justify-center">
        <span className="mr-2">AI Career</span>
        <span className="px-3 py-1 bg-coach-dark text-white">Coach</span>
      </h1>
      
      <p className="text-xl mb-12 max-w-2xl">
        Watch How Our Platform Works
      </p>
      
      <div className="relative w-full max-w-3xl mb-16 rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
            <div className="text-coach-dark text-lg font-medium">
              Career guidance video placeholder
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-xl font-medium mb-8">
        Trusted by Professionals and Companies
      </p>
      
      <div className="flex justify-center space-x-6 mb-12">
        {Array(8).fill(0).map((_, i) => (
          <span key={i} className="text-coach-muted text-2xl">★</span>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold mb-8">
        Experience AI-Powered Career Intelligence
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">Discover</h3>
          <p>Explore career paths aligned with your skills and passions</p>
        </div>
        
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">Plan</h3>
          <p>Get actionable steps to reach your professional goals</p>
        </div>
        
        <div className="coach-card">
          <h3 className="font-bold text-xl mb-2">Grow</h3>
          <p>Access resources to develop the skills you need</p>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-8">
        Proven Results for Career Growth
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-16">
        <div className="stat-card">
          <div className="stat-value">91%</div>
          <div className="stat-label">Increased career clarity</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">80%</div>
          <div className="stat-label">Found new opportunities</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">35%</div>
          <div className="stat-label">Average salary increase</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">10+</div>
          <div className="stat-label">Industry insights</div>
        </div>
      </div>
      
      <Button 
        onClick={onGetStarted}
        size="lg" 
        className="text-lg px-8 py-6 bg-coach-dark hover:bg-coach-dark/90 text-white font-medium flex items-center gap-2"
      >
        Start Coaching Now
        <ArrowDownIcon size={20} />
      </Button>
    </div>
  );
};

export default HeroSection;
