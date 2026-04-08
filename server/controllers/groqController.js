import { groqService } from '../services/groqService.js';

export const processSpeedAnalysis = async (req, res) => {
  try {
    const { transcript, prompt } = req.body;
    if (!transcript) return res.status(400).json({ error: "Transcript is required" });

    const result = await groqService.process(transcript, prompt);
    res.json(result);
  } catch (error) {
    console.error("Groq analysis error:", error);
    res.status(500).json({ error: "Speed analysis failed" });
  }
};
