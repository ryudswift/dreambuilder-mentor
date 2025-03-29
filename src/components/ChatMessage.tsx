
import React, { useEffect, useRef } from 'react';
import { Message } from '@/types';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
  messageId: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isTyping, messageId }) => {
  const isMobile = useIsMobile();
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [message.text]);

  return (
    <div
      ref={messageRef}
      className={cn(
        "flex mb-4",
        message.sender === 'user' ? "justify-end" : "justify-start"
      )}
    >
      {message.sender === 'ai' && (
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-2">
          <span className="text-sm font-bold">AI</span>
        </div>
      )}
      
      <div
        id={messageId}
        className={cn(
          "chat-bubble",
          message.sender === 'user' ? "chat-bubble-user" : "chat-bubble-ai",
          "shadow-sm"
        )}
      >
        {message.text}
        {isTyping && <span className="typing-indicator"></span>}
      </div>
      
      {message.sender === 'user' && (
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center ml-2">
          <span className="text-sm font-bold">You</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
