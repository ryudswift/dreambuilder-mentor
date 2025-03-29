
import { ChatResponse } from '@/types';

// Using the provided webhook URL
const DEFAULT_WEBHOOK_URL = 'https://n8n.sudev.site/webhook-test/chatAlex'; 

export const sendMessageToWebhook = async (message: string): Promise<ChatResponse> => {
  try {
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
