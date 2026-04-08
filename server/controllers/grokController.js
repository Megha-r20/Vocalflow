import { grokService } from '../services/grokService.js';

export const processAnalysis = async (req, res) => {
  try {
    const { transcript, prompt } = req.body;
    if (!transcript) return res.status(400).json({ error: "Transcript is required" });

    const result = await grokService.process(transcript, prompt);
    res.json(result);
  } catch (error) {
    console.error("Grok analysis error:", error);
    res.status(500).json({ error: "Analysis failed" });
  }
};
