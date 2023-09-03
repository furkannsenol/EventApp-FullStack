import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICategory extends Document {
    name: string;
    icon: string
}

const categorySchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
}, { versionKey: false })

const Category: Model<ICategory> = mongoose.model<ICategory>('categories', categorySchema)

export default Category