import { groqService } from '../services/groqService.js';
import History from '../models/History.js';
import User from '../models/User.js';

export const processSpeedAnalysis = async (req, res, next) => {
  try {
    const { transcript, prompt, title } = req.body;
    if (!transcript) return res.status(400).json({ error: "Transcript is required" });

    const result = await groqService.process(transcript, prompt);

    // Persist to history
    if (req.user) {
      await History.create({
        userId: req.user.id,
        title: title || 'Groq Analysis',
        type: 'Speed Analysis',
        status: 'Success',
        tokens: result.tokens,
        result: result,
      });

      // Deduct credits (Groq is cheaper, example: 1 credit per 20 tokens)
      const cost = Math.ceil(result.tokens / 20);
      await User.findByIdAndUpdate(req.user.id, {
        $inc: { credits: -cost, 'usage.groq': cost }
      });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
