
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 gradient-bg">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Discover Your Purpose & <br className="hidden md:block" />
        <span className="text-primary">Build Your Dream Career</span>
      </h1>
      
      <p className="text-xl mb-8 max-w-2xl">
        AI-powered coaching to help you find clarity and take action. Get personalized guidance for your career journey.
      </p>
      
      <Button 
        onClick={onGetStarted}
        size="lg" 
        className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-foreground font-medium flex items-center gap-2"
      >
        Start Coaching Now
        <ArrowDownIcon size={20} />
      </Button>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-xl mb-2">Discover</h3>
          <p>Explore career paths aligned with your skills and passions</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-xl mb-2">Plan</h3>
          <p>Get actionable steps to reach your professional goals</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-xl mb-2">Grow</h3>
          <p>Access resources to develop the skills you need</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
