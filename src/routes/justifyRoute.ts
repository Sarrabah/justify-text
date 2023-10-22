import express from 'express';
import { textJustify } from '../services/textJustifyService';

const router = express.Router();

router.post('/', (req, res) => {
  const text: string = req.body || '';
  const justifiedText = textJustify(text);
  res.send(justifiedText);
});

export default router;
