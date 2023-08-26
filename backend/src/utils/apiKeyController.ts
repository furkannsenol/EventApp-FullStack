import express, { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY

const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.query.api_key

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({ message: 'Access denied. Invalid API key.' });
    }

    next();
};

export default apiKeyMiddleware;
