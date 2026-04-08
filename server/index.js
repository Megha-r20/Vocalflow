import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { config } from './config/config.js';

// Middleware
import { errorHandler } from './middleware/errorHandler.js';
import { protect } from './middleware/authMiddleware.js';

// Routes
import authRoutes from './routes/authRoutes.js';
import balanceRoutes from './routes/balanceRoutes.js';
import deepgramRoutes from './routes/deepgramRoutes.js';
import grokRoutes from './routes/grokRoutes.js';
import groqRoutes from './routes/groqRoutes.js';

dotenv.config();

const app = express();
const PORT = config.PORT || 5000;

// Standard Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(config.MONGO_URI || 'mongodb://localhost:27017/vocalflow')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Public Routes
app.get('/', (req, res) => {
  res.send('Vocalflow Production API is running');
});
app.use('/api/auth', authRoutes);

// Protected Routes (Require Authentication)
app.use('/api/balance', protect, balanceRoutes);
app.use('/api/deepgram', protect, deepgramRoutes);
app.use('/api/grok', protect, grokRoutes);
app.use('/api/groq', protect, groqRoutes);

// Global Error Handler (Must be last)
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Vocalflow Server running on http://localhost:${PORT}`);
});
