import Food from "../models/foodItem.js"

export const getFoods = async (req,res) => {
    try {
        const products = await Food.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

import Category from "../models/footcat.js"

export const getCategory = async (req,res) => {
    try {
        const catg = await Category.find({})
        res.status(200).json(catg)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

