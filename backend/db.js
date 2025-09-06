import mongoose , {Schema} from "mongoose"

const ObjectId = mongoose.Types.ObjectId



const userSchema = new Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    } 
})
const courseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    creatorId:{
        type:ObjectId
    }
})

const adminSchema = new Schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})

const purchaseSchema = new Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const userModel = mongoose.model("user",userSchema)
const adminModel = mongoose.model("admin",adminSchema)
const courseModel = mongoose.model("course",courseSchema)
const purchaseModel = mongoose.model("purchase",purchaseSchema)

export { userModel,
  adminModel,
  courseModel,
  purchaseModel
}