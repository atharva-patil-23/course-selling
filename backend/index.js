import express from "express"
import jwt from "jsonwebtoken"
import courseRouter from "./Routes/course.route.js"
import userRouter from "./Routes/user.route.js"

const app = express()
const port = 3000

app.use("/user",userRouter)
app.use("/course",courseRouter)


app.listen(port, () =>{
    console.log(`Your server is now listening at ${port}`)
})