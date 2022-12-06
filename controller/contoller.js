import {tourist} from "../model/touristSchema.js"
export const tourist_contoller = {
    updateone :{},
    postone: async(req,res)=>{
        // const happy = await req.body
        res.status(200).json({msg:"it has posted succesfully"})
    },
    deleteone:{},
    updateall:{},
    findone:{},
    getall:(req,res)=>{
        console.log("in here now")
        
        // const happy2=tourist.find()
        res.json({msg:"i am in the get all request now"})
        
    },
    
}

