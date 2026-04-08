import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
  GROQ_API_KEY: process.env.GROQ_API_KEY,
};
