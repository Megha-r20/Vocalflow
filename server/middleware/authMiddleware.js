import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { config } from '../config/config.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ error: 'Not authorized to access this resource' });
    }

    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET || 'fallback_secret');

    // Add user to request
    req.user = await User.findById(decoded.id);
    
    if (!req.user) {
      return res.status(401).json({ error: 'User not found with this token' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Not authorized to access this resource' });
  }
};
