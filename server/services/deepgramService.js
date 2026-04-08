import dotenv from 'dotenv';
dotenv.config();

export class DeepgramService {
  constructor() {
    this.apiKey = process.env.DEEPGRAM_API_KEY;
  }

  async transcribe(audioUrl) {
    if (!this.apiKey) {
      console.warn("DEEPGRAM_API_KEY not found, using simulation mode.");
      return this.simulateTranscription(audioUrl);
    }

    // In a real implementation:
    // const response = await fetch('https://api.deepgram.com/v1/listen', { ... });
    // return await response.json();

    return this.simulateTranscription(audioUrl);
  }

  simulateTranscription(audioUrl) {
    return {
      transcript: "This is a simulated transcription from Deepgram. In a live environment, this would process the audio file provided.",
      confidence: 0.98,
      metadata: {
        request_id: `dg_${Date.now()}`,
        created: new Date().toISOString()
      }
    };
  }
}

export const deepgramService = new DeepgramService();
