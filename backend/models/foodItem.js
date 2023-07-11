import mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
    Category:String,
    name: String,
    img: String,
    options: Object,
    description: String,

})

const Food = mongoose.model("fooditem", foodSchema)

export default Food