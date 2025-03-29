
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
      
      <div ref={chatSectionRef} className="py-10 px-4 md:px-8 min-h-screen">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Talk to Your AI Career Coach
          </h2>
          
          <div className="max-w-3xl mx-auto h-[70vh]">
            <ChatContainer />
          </div>
        </div>
      </div>
      
      <footer className="py-6 bg-secondary">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            AI Career Coach &copy; {new Date().getFullYear()} | Powered by AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
