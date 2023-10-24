import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();
const authRouter = express.Router();
const secretKey = process.env.JWT_SECRET;

authRouter.post('/', (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  if (!secretKey) {
    throw new Error('JWT secret key is not defined');
  }
  const token = jwt.sign({ email }, secretKey, { expiresIn: '24h' });
  res.json({ token });
});

export default authRouter;