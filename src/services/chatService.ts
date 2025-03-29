
import { ChatResponse } from '@/types';

const WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL'; // Replace with your actual webhook URL

export const sendMessageToWebhook = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
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
