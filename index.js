const express = require("express")
const { default: mongoose } = require("mongoose")

const dotenv=require("dotenv")

const app =express()

const PORT = process.env.PORT||8000

const connectDB=require("./database")

const hospial_patients=require("./model/schema")

let count = 0

dotenv.config()



app.use(express.json())

connectDB()


app.listen(PORT,()=>{
    console.log(`sever is running on ${PORT}`)
})
app.post("/create",(req,res)=>{
    console.log("i am in the post")
    // first post to database
    try {
        const {first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin}=req.body

        const first_patient=new hospial_patients({first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin})

        res.status(500).json({msg:"collection created succesfully"})
    

    first_patient.save()
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    
        
    
    
})


app.post("/",async(req,res)=>{
    
    
    
    try {
        
        const patient=await hospial_patients.findOne({card_no})
        if (patient) {return res.status(404).json({msg:"patient already registered"})}
        else{
            const new_patient=new hospial_patients({first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin})

            await new_patient.save()

            return res.status(500).json({msg:"patient added succesfuly"})
        }




    } catch (error) {
        return res.status(500).json({msg:error.message})
    }

})

app.get("/",async(req,res)=>{
    try {
        const {first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin}=req.body
        const find_patient = new hospial_patients({first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin})

        const patient= await hospial_patients.findOne({card_no})
        if (patient) return res.status(500).json({msg:"patient found"})
        
        
        return res.status(404).json({msg:"patient not found,complete the registration"})

        
    } catch (error) {
        return res.status(400).json({msg:error.message})
        
    }
    


})

app.get("/allpatient",async(req,res)=>{
    try {
        const all_patient = await hospial_patients.find()
       
    if(!all_patient) return res.status(400).json({msg:"na new hospital be this??"})
    return res.status(500).json({msg:all_patient})
    } catch (error) {

        return res.status(200).json({msg:error.message})
    }
    
})

app.patch("/:id", async(req,res)=>{
    console.log("i dey inside the put request oo")
    try {
        const id =req.params.id
        console.log(id)
        const check = await hospial_patients.findOne({id})
        console.log(`this is the check ${check}`)

        const {first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin}=req.body
    

        const new_patient = await hospial_patients.findByIdAndUpdate(id,{first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin})
        console.log(`i am inside the new patient ${typeof new_patient}`)

        // if(Object.is(new_patient,check)) return res.status(500).json({msg:"everything was the same"})

         return res.status(500).json({msg:"patient info has been updated"})

        
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
    
    
})

app.delete("/:id", async(req,res)=>{
    
    try {
        const id =req.params.id
        console.log(id)
      

        // const {first_name, last_name ,card_no ,doctor_assigned,nurse_assigned,diagnosis,next_of_kin}=req.body
    

        const new_patient = await hospial_patients.findByIdAndDelete(id)
        

        
         return res.status(500).json({msg:"patient is dead"})

        
    } catch (error) {
        return res.status(400).json({msg:error.message})
    }
    
    
})






