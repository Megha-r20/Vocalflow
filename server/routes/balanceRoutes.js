const express = require('express');
const router = express.Router();

// Mock data for balances
router.get('/', (req, res) => {
  res.json({
    deepgram: 24.50,
    grok: 18.30
  });
});

module.exports = router;
