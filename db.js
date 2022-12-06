// another name for javascript is ecmascript
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


export const connect_db = async()=>{
    const url = process.env.MONGO_URL
    await mongoose.connect(url,()=>{
        console.log("database is connected")
    }

    )
}



