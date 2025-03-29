
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
            Experience the Future of Career Guidance
          </h2>
          
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Talk to our AI Career Coach and see how intelligent guidance can transform your professional journey
          </p>
          
          <div className="max-w-3xl mx-auto h-[70vh] coach-card">
            <ChatContainer />
          </div>
        </div>
      </div>
      
      <footer className="py-10 gradient-bg border-t border-coach-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">AI Career Coach</h3>
              <p className="text-sm text-coach-muted">
                AI-powered career guidance helping professionals find their path.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:underline">About</a></li>
                <li><a href="#" className="text-sm hover:underline">Features</a></li>
                <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-sm text-coach-muted">support@aicareercoach.com</p>
              <p className="text-sm text-coach-muted">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="border-t border-coach-border mt-8 pt-8 text-center text-sm text-coach-muted">
            <p>© {new Date().getFullYear()} AI Career Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
