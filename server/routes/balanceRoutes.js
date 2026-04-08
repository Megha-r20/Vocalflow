import express from 'express';
import { getBalance, updateBalance } from '../controllers/balanceController.js';

const router = express.Router();

router.get('/', getBalance);
router.post('/update', updateBalance);

export default router;
