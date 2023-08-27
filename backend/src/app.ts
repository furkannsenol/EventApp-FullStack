import connectionDB from "./database/db";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import categoryRouter from './routes/categoryRoute'
import eventRouter from './routes/eventRoute'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from "./swagger/swaggerOptions";

dotenv.config();

connectionDB()

const specs = swaggerJsdoc(swaggerOptions);
const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/categories', categoryRouter);
app.use('/api/events', eventRouter)

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`API running, localhost:${port}`);
})