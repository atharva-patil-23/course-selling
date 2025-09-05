import express from "express"
import jwt from "jsonwebtoken"

const app = express()
const port = 3000
app.use(express.json())

app.post("/user/signin", (req,res) => {

})

app.post("/user/login",(req,res) => {

})

app.get("/user/purchases",(req,res) => {

})

app.post("/course/purchase",(req,res) => {

})

app.get("/courses",(req,res) => {

})


app.listen(port, () =>{
    console.log(`Your server is now listening at ${port}`)
})