import express from "express"
const app = express()
import mongoose from "mongoose"
import dotenv from "dotenv"

import DefaultData from "./defaultData.js"
import router from "./routes/route.js"


dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=>console.log("DB Connection Successfully"))
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use('/', router)

const PORT = 8000
app.listen(PORT, () => console.log(
    `server is running on ${PORT}`
))

DefaultData()