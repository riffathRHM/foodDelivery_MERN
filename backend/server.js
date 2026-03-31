//create a exprss server 
import exprss from "express"
import cors from "cors"
import { connect } from "mongoose"
import { connectDB } from "./config/db.js"

//app config 
const app = exprss()
const port = 4000

//middleware 
app.use(exprss.json()) // when ever get a request from backend to frontend that will passed with this json
app.use(cors()) // we can access any frontend from backend

//DB Connection
connectDB();


app.get("/",(req,res)=>{
  res.send("API Working")
})

//run the express server
app.listen (port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
//mongodb+srv://riffathemedia_db_user:7013040@cluster0.aivinvm.mongodb.net/?