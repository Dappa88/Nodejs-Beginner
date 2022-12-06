import mongoose,{Schema} from "mongoose"

const tourist_schema = new Schema(
    {
        name:{
            type:String,
            required: [true,"please enter your name"]
        },
        email : {
            type:String,
            required: [true,"please enter your name"]
        },
        phoneNumber :{
            type:Number,
            required: [true,"please enter your phone number"]

        },
        address : {type :String},
        state : {type: String},
        nextOfKin :{
            type:String,
            required: [true,"please enter your next of kin"]
        },
        nextOfKinContact :{
            type:Number,
            required: [true,"please enter your next of kin contact"]
        }
    },{timestamps:true}
)

export const tourist = mongoose.model("Tourist",tourist_schema)

// or u can use export default
// this is the only file u are exporting
// export default tourist