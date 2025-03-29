
export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  // Add any other fields your n8n webhook might return
}
