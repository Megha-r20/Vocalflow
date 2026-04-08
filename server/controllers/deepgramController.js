import { deepgramService } from '../services/deepgramService.js';
import History from '../models/History.js';
import User from '../models/User.js';

export const transcribe = async (req, res, next) => {
  try {
    const { audioUrl, title } = req.body;
    if (!audioUrl) return res.status(400).json({ error: "Audio URL is required" });

    const result = await deepgramService.transcribe(audioUrl);

    // Save to history if user is logged in
    if (req.user) {
      await History.create({
        userId: req.user.id,
        title: title || 'New Transcription',
        type: 'Transcription',
        status: 'Success',
        result: result,
      });

      // Deduct small credit for transcription (example: 10 credits)
      await User.findByIdAndUpdate(req.user.id, {
        $inc: { credits: -10, 'usage.deepgram': 10 }
      });
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};
