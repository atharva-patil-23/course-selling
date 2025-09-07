import { Router } from "express";
import { userModel } from "../db.js";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET
const userRouter = Router()

userRouter.post("/signup", async (req,res) => {
    
    const {email, password , firstName ,lastName} = req.body

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"Signup Successful"
    })
})

userRouter.post("/login",(req,res) => {
    const {email, password} =req.body

    
})

userRouter.get("/purchases",(req,res) => {

})

export default userRouter