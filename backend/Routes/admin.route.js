import { Router } from "express";
import { adminModel, userModel } from "../db.js";
import z from "zod";

const adminRouter = Router()

adminRouter.post("/signup",async function(req,res){

    const { email, password, firstName, lastName} = req.body

    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

})

adminRouter.post("/course",(req,res)=>{

})

adminRouter.delete("/course",(req,res)=>{

})

adminRouter.put("/course",(req,res)=>{

})

adminRouter.get("/course/bulk",(req,res)=>{

})


export default adminRouter