import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'; // Reserved for actual DB connection

import balanceRoutes from './routes/balanceRoutes.js';
import deepgramRoutes from './routes/deepgramRoutes.js';
import grokRoutes from './routes/grokRoutes.js';
import groqRoutes from './routes/groqRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/balance', balanceRoutes);
app.use('/api/deepgram', deepgramRoutes);
app.use('/api/grok', grokRoutes);
app.use('/api/groq', groqRoutes);

// Base Route
app.get('/', (req, res) => {
  res.send('Vocalflow API is running with high-fidelity controllers');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on the server!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
