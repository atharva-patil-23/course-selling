import { Router } from "express";
import { userModel } from "../db.js";
import jwt from "jsonwebtoken"
import {z} from "zod"
import bcrypt from "bcrypt"
const userRouter = Router()

const signupSchema = z.object({
    email:z.string().email("Invalid email format"),
    password:z.string().min(6,"password must be 6 character long"),
    firstName:z.string().min(1,"firstName is compulsory"),
    lastName:z.string().min(1,"lastname is compulsory")
})

const signinSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6,"password must be 6 character long")
})

userRouter.post("/signup", async (req,res) => {
    try {
        const validatedData = signupSchema.parse(req.body)

    const {email, password , firstName ,lastName} = validatedData

    const existingUser = await userModel.findOne({email})

    if(existingUser){
        return res.status(409).json({
            message:"user already exist with this email"
        })
    }

    const hashedPassword = await bcrypt.hash(password,9)

    await userModel.create({
        email:email,
        password:hashedPassword,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"Signup Successful"
    })
        
    } catch (error) {
        console.log("validation error ",error)
    }
    
})

userRouter.post("/login",async(req,res) => {
    try {
        const validatedData = signinSchema.parse(req.body)
    const {email, password} =validatedData

    const user = await userModel.findOne({
        email:email
    })

    if(!user){
        return res.status(409).json({
            message:"Incorrect credentials"
        })
    }


    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(403).json({
            message:"incorrect credentials"
        })
    }

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_USER_SECRET)

    res.json({
        token:token,
        message:"Signin Successful"
    })
        
    } catch (error) {
        console.log("signin error:",error)

        res.status(509).json({
            message:"error during signin"
        })
    }
    
})

userRouter.get("/purchases",(req,res) => {
    
})

export default userRouter