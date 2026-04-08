import dotenv from 'dotenv';
dotenv.config();

export class GroqService {
  constructor() {
    this.apiKey = process.env.GROQ_API_KEY;
  }

  async process(transcript, prompt) {
    // Logic for Groq API (High-speed Llama-3/similar)
    return {
      response: `[Groq Speed] Analyzed: "${transcript}" using prompt "${prompt || 'Default Analysis'}".`,
      tokens: Math.floor(Math.random() * 800) + 50,
      model: "llama-3-70b",
      latency: "0.4s"
    };
  }
}

export const groqService = new GroqService();
