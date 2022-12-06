import express from "express"

import dotenv from "dotenv"
import { connect_db } from "./db.js"

import {routes} from "./routes/index.js"

// const route = routes

dotenv.config()

const app = express()

const port = process.env.PORT ||  6000

connect_db()
app.use(express.json())


// app.use("/api",route)
// test route ,it is to test if they can connect to the backend
app.use("/api",routes)



app.get("/appi",(req,res)=>{
    
    res.status(200).json({
        msg : "welcome to smarthub backend"
    })
})


app.listen(port,()=>{
    console.log(`server is runniing on ${port}`)
})
