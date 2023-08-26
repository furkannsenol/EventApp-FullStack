import { Request, Response } from "express"
import Category, { ICategory } from "../models/categoryModel"

const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories: ICategory[] = await Category.find()
        res.status(200).json({
            status: 'OK',
            total_results: categories.length,
            results: categories,
        })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

const createCategory = async (req: Request, res: Response): Promise<void> => {
    //const { categoryName }: { categoryName: string } = req.body

    try {
        const requestBody = req.body as ICategory | null
        if (!requestBody) {
            res.status(400).json({ message: "Request body is missing" })
            return
        }

        const { name } = requestBody
        if (!name) {
            res.status(400).json({ message: "name is required" })
            return
        }

        const newCategory: ICategory = new Category({ name })
        const savedCategory: ICategory = await newCategory.save()
        res.status(201).json(savedCategory)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const categoryController = {
    getAllCategories,
    createCategory
}
