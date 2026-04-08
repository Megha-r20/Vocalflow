const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'VocalFlow API is running smoothly' });
});

// Routes Placeholder (will implement actual routes next)
app.use('/api/balance', require('./routes/balanceRoutes'));
app.use('/api/deepgram', require('./routes/deepgramRoutes'));
app.use('/api/grok', require('./routes/grokRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
