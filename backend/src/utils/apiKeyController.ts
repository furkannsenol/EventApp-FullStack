import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY
//console.log(process.env.API_KEY)

const apiKeyMiddleware = (req: any, res: any, next: any) => {
    //const apiKey = req.header('api_key');
    const apiKey = req.query.api_key

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({ message: 'Access denied. Invalid API key.' });
    }

    next();
};

export default apiKeyMiddleware;
