
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '@/types';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { sendMessageToWebhook } from '@/services/chatService';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI career coach. Tell me about your career goals or challenges, and I'll help guide you.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Create temporary AI message with typing indicator
    const tempAiMessageId = uuidv4();
    const tempAiMessage: Message = {
      id: tempAiMessageId,
      text: '',
      sender: 'ai',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, tempAiMessage]);
    setTypingMessageId(tempAiMessageId);
    
    try {
      // Send message to webhook
      const response = await sendMessageToWebhook(text);
      
      // Update with actual response
      setMessages(prev => 
        prev.map(msg => 
          msg.id === tempAiMessageId 
            ? { ...msg, text: response.message || "I'm not sure how to respond to that." }
            : msg
        )
      );
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Update with error message
      setMessages(prev => 
        prev.map(msg => 
          msg.id === tempAiMessageId 
            ? { ...msg, text: "Sorry, I'm having trouble connecting. Please try again later." }
            : msg
        )
      );
      
      toast({
        title: "Connection Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setTypingMessageId(null);
    }
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <span className="h-6 w-6 rounded-full bg-primary mr-2"></span>
          AI Career Coach
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto chat-container p-4">
        {messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            isTyping={message.id === typingMessageId}
            messageId={`msg-${message.id}`}
          />
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter className="pt-2">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </CardFooter>
    </Card>
  );
};

export default ChatContainer;
