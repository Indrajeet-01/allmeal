import mongoose from "mongoose"

const catSchema = new mongoose.Schema({
    Category:String,
})

const Category = mongoose.model("foodcat", catSchema)

export default Category