import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

export const jwtAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (!secretKey) {
    throw new Error('JWT secret key is not defined');
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  });
}