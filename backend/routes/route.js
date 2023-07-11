import express from "express";

import { getFoods,getCategory } from "../controller/foodItem.js"

const router = express.Router()



router.get('/foods', getFoods)
router.get('/foodcat', getCategory)

export default router