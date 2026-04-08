const express = require('express');
const router = express.Router();

// Mock AI processing endpoint
router.post('/process', (req, res) => {
  const { transcript, prompt } = req.body;
  
  if (!transcript) {
    return res.status(400).json({ error: 'Transcript is required' });
  }

  // Simulate AI processing
  setTimeout(() => {
    res.json({
      response: "This is a mock AI response from Grok. It simulates processing the transcript according to the provided prompt.",
      tokens: 145
    });
  }, 1200);
});

module.exports = router;
