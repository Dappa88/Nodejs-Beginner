import {user} from "../model/auth_model.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken" 

const jwt = jsonwebtoken

const generateaccesstoken = (payload)=>{
    return jwt.sign(payload,process.env.ACCESSTOKEN,{expiresIn:"5m"})

}

const generatrefreshtoken = (payload)=>{
    return jwt.sign(payload,process.env.REFRESHTOKEN,{expiresIn:"5d"})

}














export const auth = {
    register :async(req,res)=>{
        console.log("i am inside the register")
        try {
            const {name ,email,password,cf_password} = req.body
            if (!name || !email ||!password || !cf_password)
                return res.status(400).json({msg:"please enter all fields"})
            if(password !== cf_password)
                return res.status(500).json({msg:"password dosent match"})

            const alreadyexist = await user.findOne({email:email})
            if (alreadyexist)
                return res.status(500).json({msg:"user already exist"})
            const hash_password =  await bcrypt.hash(password,12)
            // hash the password about 12 times


            const newuser = new user({name,email,password:hash_password})
            console.log(newuser)
            const accesstoken = generateaccesstoken({newuser})
            const refreshtoken = generatrefreshtoken({newuser})
            // the new user must be in {}
            console.log(refreshtoken)
            await newuser.save()
            return res.status(200).json({msg:"user succesfully registered"})



            
        } catch (error) {
            return res.status(400).json({msg:error.msg})
        }
    } ,
    login : async()=>{},

    getalluser:async(req,res)=>{
        try {
            const alluser = await user.find()

            return res.status(200).json(alluser)
        } catch (error) {
            return res.status(400).json({msg:"user not found"})
        }
    }

}