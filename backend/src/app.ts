import connectionDB from "./database/db";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import categoryRouter from './routes/categoryRoute'

dotenv.config();

connectionDB()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/categories', categoryRouter);


app.listen(port, () => {
    console.log(`API running, localhost:${port}`);
})