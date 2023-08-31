import { Request, Response } from "express"
import Event, { IEvent } from "../models/eventModel"

const getAllEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1; 
        const limit = 10; 

        const totalEventsCount = await Event.countDocuments(); 
        const totalPages = Math.ceil(totalEventsCount / limit); 

        const startIndex = (page - 1) * limit; 
        //const endIndex = page * limit; 

        const events: IEvent[] = await Event.find().skip(startIndex).limit(limit).sort({ date:-1 })
        res.status(200).json({
            status: 'OK',
            total_results: totalEventsCount,
            total_pages: totalPages,
            results: events,
        })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

const createEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const requestBody = req.body as IEvent | null
        if (!requestBody) {
            res.status(400).json({ message: "Request body is missing" })
            return
        }

        const { name, description, date, show_time, category, images, owner, location_information, pricing_type, pricing_list } = requestBody
        if (!name || !description || !date || !show_time || !category || !images || !owner || !location_information || !pricing_type || !pricing_list) {
            res.status(400).json({ message: "All required fields must be provided" })
            return
        }

        const newEvent: IEvent = new Event({
            name,
            description,
            date,
            show_time,
            category,
            images,
            owner,
            location_information,
            pricing_type,
            pricing_list
        });

        const savedEvent: IEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

const getPopularEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events: IEvent[] = await Event.find().limit(5).sort({ date:-1 })
        res.status(200).json({
            status: 'OK',
            total_results: events.length,
            results: events,
        })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const eventController = {
    getAllEvents,
    createEvent,
    getPopularEvents
}
