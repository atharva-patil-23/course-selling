import express from "express"
import jwt from "jsonwebtoken"

const app = express()
const port = 3000
app.use(express.json())



app.listen(port, () =>{
    console.log(`Your server is now listening at ${port}`)
})