const mongoose = require("mongoose")
const express = require("express");
const app = express()
require("dotenv").config()
const cors = require("cors")

let userRoutes = require("./routes/user.route")

//middlewares
app.use(cors());
app.use(express.urlencoded({extended:true, limit:"50mb"}))
app.use(express.json({limit:"50mb"}))

app.use("/user", userRoutes)

let URI ="mongodb+srv://olutayostephen:AYANRINDE@cluster0.iibdlfl.mongodb.net/front-end-connect-db1?retryWrites=true&w=majority"
    mongoose.connect(URI) //UNIFORM RESOURCE IDENTIFIER (URI)
     .then(()=>{console.log("mongo has connect")})
     .catch((err)=>{console.log("mongo refuse" + err)})


let PORT = process.env.PORT
 app.listen(PORT,()=>{
 console.log("app is listening at PORT : " + PORT)
    })