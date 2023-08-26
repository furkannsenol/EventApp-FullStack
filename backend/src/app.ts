import connectionDB from "./database/db";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import categoryRouter from './routes/categoryRoute'
import eventRouter from './routes/eventRoute'
dotenv.config();

connectionDB()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/categories', categoryRouter);
app.use('/api/events',eventRouter)

app.listen(port, () => {
    console.log(`API running, localhost:${port}`);
})