
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ChatContainer from '@/components/ChatContainer';

const Index: React.FC = () => {
  const chatSectionRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    chatSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onGetStarted={scrollToChat} />
      
      <div ref={chatSectionRef} className="py-16 px-4 md:px-8 min-h-screen gradient-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ask HORMAX How To 100X Your Time & Outcomes
          </h2>
          
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Our AI productivity machine doesn't care about your feelings, only your results. Prepare for uncomfortably direct advice.
          </p>
          
          <div className="max-w-3xl mx-auto h-[70vh] coach-card">
            <ChatContainer />
          </div>
        </div>
      </div>
      
      <footer className="py-10 bg-coach-dark text-white border-t-4 border-coach-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-coach-yellow">HORMAX</h3>
              <p className="text-sm text-gray-300">
                Ruthlessly efficient advice for tech founders, entrepreneurs & investors who refuse to waste time.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-coach-yellow">Links That Matter</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-coach-yellow">Productivity System</a></li>
                <li><a href="#" className="text-sm hover:text-coach-yellow">100X Manifesto</a></li>
                <li><a href="#" className="text-sm hover:text-coach-yellow">Legal Mumbo Jumbo</a></li>
                <li><a href="#" className="text-sm hover:text-coach-yellow">Excuses (404 Page)</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-coach-yellow">Contact</h3>
              <p className="text-sm text-gray-300">results@hormax.io</p>
              <p className="text-sm text-gray-300">+1 (100) 100-100X</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} HORMAX. No Rights Reserved. Just Get Results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
