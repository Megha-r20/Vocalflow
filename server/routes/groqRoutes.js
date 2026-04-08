import express from 'express';
import { processSpeedAnalysis } from '../controllers/groqController.js';

const router = express.Router();

router.post('/process', processSpeedAnalysis);

export default router;
