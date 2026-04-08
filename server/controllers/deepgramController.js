import { deepgramService } from '../services/deepgramService.js';

export const transcribe = async (req, res) => {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "Audio URL is required" });

    const result = await deepgramService.transcribe(audioUrl);
    res.json(result);
  } catch (error) {
    console.error("Transcription error:", error);
    res.status(500).json({ error: "Transcription failed" });
  }
};
