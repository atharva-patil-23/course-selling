import express from "express"
import jwt from "jsonwebtoken"
import courseRouter from "./Routes/course.route.js"
import userRouter from "./Routes/user.route.js"
import adminRouter from "./Routes/admin.route.js"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 3000

app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


async function main(){
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(port, () =>{
        console.log(`Your server is now listening at ${port}`)
    })
}

main()