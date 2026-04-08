const express = require('express');
const router = express.Router();

// Mock transcription endpoint
router.post('/transcribe', (req, res) => {
  const { audioUrl } = req.body;
  
  if (!audioUrl) {
    return res.status(400).json({ error: 'Audio URL is required' });
  }

  // Simulate transcription processing
  setTimeout(() => {
    res.json({
      transcript: "This is a mock transcript from Deepgram. In a production environment, this would call the actual Deepgram SDK/API to process the provided audio URL.",
      confidence: 0.98
    });
  }, 1000);
});

module.exports = router;
