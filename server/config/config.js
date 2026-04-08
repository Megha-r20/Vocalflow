import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
  GROK_API_KEY: process.env.GROK_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET || 'vocalflow_premium_secret_key_2026',
};
