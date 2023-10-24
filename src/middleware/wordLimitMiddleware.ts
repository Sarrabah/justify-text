import { Request, Response, NextFunction } from 'express';

const tokenUsage: Record<string, number> = {};

export default function wordLimitMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const wordCount = countWords(req.body);
    const newUsage = (tokenUsage[token] || 0) + wordCount;
    if (newUsage >= 80000) {
        return res.status(402).json({ message: 'Payment Required' });
    }
    tokenUsage[token] = newUsage;

    next();
}

function countWords(text: string) {
    const words = text.split(" ");
    return words.length;
}
