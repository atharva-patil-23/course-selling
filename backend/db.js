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
const courseSchema = Schema({
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

const adminSchema = Schema({
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

const purchaseSchema = Schema({
    courseId:ObjectId,
    userId:ObjectId
})

const userModel = mongoose.Model("user",userSchema)
const adminModel = mongoose.Model("admin",adminSchema)
const courseModel = mongoose.Model("course",courseSchema)
const purchaseModel = mongoose.Model("purchase",purchaseSchema)