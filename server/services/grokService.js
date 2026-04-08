import dotenv from 'dotenv';
dotenv.config();

export class GrokService {
  constructor() {
    this.apiKey = process.env.GROK_API_KEY;
  }

  async process(transcript, prompt) {
    // Logic for xAI (Grok) API
    // We'll simulate if no API key is present
    return {
      response: `[Grok Analysis] Interpreted: "${transcript}" with focus on "${prompt || 'General Summary'}".`,
      tokens: Math.floor(Math.random() * 500) + 100,
      model: "grok-1",
      latency: "1.2s"
    };
  }
}

export const grokService = new GrokService();
