import { Router } from "express";
import { adminModel } from "../db.js";
import z from "zod";

const adminRouter = Router()

adminRouter.post("/signup",(req,res)=>{

    const email = req.body.email
    const password = req.body.password
    const fullName = req.body.fullName
    const lastName = req.body.lastName

    

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