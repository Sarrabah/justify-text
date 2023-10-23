import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authRouter = express.Router();

// dump secret key
const secretKey = 'hello';

authRouter.post('/', (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const token = jwt.sign({ email }, secretKey);
  res.json({ token });
});

export default authRouter;