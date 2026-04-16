//create a exprss server 
import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import 'dotenv/config'

//app config 
const app = express()
const port = 4000

//middleware 
app.use(express.json()) // when ever get a request from backend to frontend that will passed with this json
app.use(cors()) // we can access any frontend from backend

//DB Connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
  res.send("API Working")
})

//run the express server
app.listen (port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://riffathemedia_db_user:7013040@cluster0.aivinvm.mongodb.net/?