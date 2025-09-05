import { Router } from "express";

const userRouter = Router()

userRouter.get("/signin", (req,res) => {
    res.json({
        message:"this is the signin endpoint"
    })
})

userRouter.post("/login",(req,res) => {

})

userRouter.get("/purchases",(req,res) => {

})

export default userRouter