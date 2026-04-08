import { balanceService } from '../services/balanceService.js';

export const getBalance = async (req, res) => {
  try {
    // In a real app, email would come from auth middleware (req.user.email)
    const email = "user@example.com"; 
    const data = await balanceService.getBalance(email);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch balance data" });
  }
};

export const updateBalance = async (req, res) => {
    try {
      const { amount } = req.body;
      const email = "user@example.com";
      await balanceService.deductCredits(email, amount);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update balance" });
    }
};
