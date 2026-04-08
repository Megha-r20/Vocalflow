import { grokService } from '../services/grokService.js';
import History from '../models/History.js';
import User from '../models/User.js';

export const processAnalysis = async (req, res, next) => {
  try {
    const { transcript, prompt, title } = req.body;
    if (!transcript) return res.status(400).json({ error: "Transcript is required" });

    const result = await grokService.process(transcript, prompt);

    // Persist to history
    if (req.user) {
      await History.create({
        userId: req.user.id,
        title: title || 'Grok Analysis',
        type: 'Analysis',
        status: 'Success',
        tokens: result.tokens,
        result: result,
      });

      // Deduct credits based on tokens (example: 1 credit per 10 tokens)
      const cost = Math.ceil(result.tokens / 10);
      await User.findByIdAndUpdate(req.user.id, {
        $inc: { credits: -cost, 'usage.grok': cost }
      });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
