import mongoose,{Schema,model}  from "mongoose";

const userSchema = new Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },

        password : {
            type :String,
            required : true
        },
        cf_password : {
            type: String,
            

        }
    }
)


export const user = model("users",userSchema)
