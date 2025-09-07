import { Router } from "express";
import { adminModel} from "../db.js";
import { z } from "zod";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import adminMiddleware from "../middleware/admin.middleware.js";


const adminRouter = Router()

const signupSchema = z.object({
    email:z.string().email("Enter the valid email"),
    password:z.string().min(6),
    firstName:z.string().min(1),
    lastName:z.string().min(1)
})

const signinSchema = z.object({
    email:z.string().email("enter the valid email"),
    password:z.string().min(6)
})


adminRouter.post("/signup",async function(req,res){

    try {
        const validatedData = signupSchema.parse(req.body)
        const {email, password, firstName, lastName} = validatedData

        const existingUser = await adminModel.findOne({email})

        if(existingUser){
            return res.status(403).json({
                message:"user already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,9)

        await adminModel.create({
            email:email,
            password:hashedPassword,
            firstName:firstName,
            lastName:lastName
        })

        res.json({
            message:"Signup Successful"
        })
        
    } catch (error) {
        console.log("validation error",error)
    }

})

adminRouter.post("/signin",async function(req,res){

    try {
    const validatedData = signinSchema.parse(req.body)
    const {email, password} = validatedData

    const admin = await adminModel.findOne({email})

    if(!admin){
        return res.json({
            message:"Invalid Credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,admin.password)

    if(!isPasswordValid){
        res.json({
            message:"invalid credentials"
        })
    }

    const token = jwt.sign({
        id:admin._id
    },process.env.JWT_ADMIN_SECRET)

    res.json({
        token:token,
        message:"Signin Successful"
    })
    } catch (error) {
        console.log("Signin Error", error)

        res.status(403).json({
            message:"error during signin"
        })
    }
})

adminRouter.post("/course",adminMiddleware,(req,res)=>{

})

adminRouter.delete("/course",(req,res)=>{

})

adminRouter.put("/course",(req,res)=>{

})

adminRouter.get("/course/bulk",(req,res)=>{

})


export default adminRouter