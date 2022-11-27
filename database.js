const mongoose = require("mongoose")

const connectDB = async ()=>{
    const URL=`${process.env.URL}`
    await mongoose.connect(URL,()=>{
        
        console.log("database is connected")
        
        
    })
}

module.exports =connectDB