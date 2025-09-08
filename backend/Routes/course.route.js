import { Router } from "express";
import { courseModel, purchaseModel } from "../db.js";

const courseRouter = Router()

courseRouter.post("/purchase",async(req,res) => {
    const userId = req.userId 
    const courseId = req.body.courseID

    await purchaseModel.create({
        userId,
        courseId
    })


    res.json({
        message:"you have successfully purchased the course"
    })

})

courseRouter.get("/preview",async (req,res) => {
    const courses = await courseModel.find({})

    res.json({
        courses
    })
})


export default courseRouter