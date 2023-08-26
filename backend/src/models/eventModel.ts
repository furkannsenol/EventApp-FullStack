import mongoose, { Document, Model } from "mongoose";

export interface IPricing {
    category_name: string;
    pay: number;
}

export interface ILocation {
    place: string;
    city: string;
    adress: string;
    latitude: number;
    longitude: number;
}

export interface IEvent extends Document {
    name: string;
    description: string;
    date: string;
    show_time: string;
    category: string;
    images: string[];
    owner: string;
    location_information: ILocation;
    pricing_type: string;//free or pay
    pricing_list: IPricing[];

}

const eventSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    show_time: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    location_information: {
        type: {
            place: String,
            city: String,
            address: String,
            latitude: Number,
            longitude: Number,
        },
        required:true,
        _id:false
    },
    pricing_type: {
        type: String,
        required: true
    },
    pricing_list: {
        type: [{
            category_name: String,
            pay: Number
        }],
        required: true,
        _id:false
    }
}, { versionKey: false })

const Event: Model<IEvent> = mongoose.model<IEvent>('events', eventSchema)

export default Event