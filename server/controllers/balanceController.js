import User from '../models/User.js';

export const getBalance = async (req, res, next) => {
  try {
    // req.user is populated by protect middleware
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      credits: user.credits,
      usage: user.usage
    });
  } catch (error) {
    next(error);
  }
};

export const updateBalance = async (req, res, next) => {
  try {
    const { amount, service } = req.body;
    
    const update = { $inc: { credits: -amount } };
    if (service) {
      update.$inc[`usage.${service}`] = amount;
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      update,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      credits: user.credits,
      usage: user.usage
    });
  } catch (error) {
    next(error);
  }
};
