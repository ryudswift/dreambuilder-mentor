
import { ChatResponse } from '@/types';

// Placeholder webhook URL - replace with your actual webhook URL
const DEFAULT_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL'; 

export const sendMessageToWebhook = async (message: string): Promise<ChatResponse> => {
  try {
    // For development purposes, you can use a fallback response if the webhook is not set
    // This allows testing the UI while setting up the backend
    if (DEFAULT_WEBHOOK_URL === 'YOUR_N8N_WEBHOOK_URL') {
      console.warn('Using mock response - please set your actual webhook URL in chatService.ts');
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        message: `I'd be happy to help with your career question: "${message}". To get real AI responses, please set up your n8n webhook URL in the chatService.ts file.`
      };
    }

    const response = await fetch(DEFAULT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message to webhook:', error);
    throw error;
  }
};
