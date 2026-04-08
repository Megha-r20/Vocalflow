import express from 'express';
import { processAnalysis } from '../controllers/grokController.js';

const router = express.Router();

router.post('/process', processAnalysis);

export default router;
