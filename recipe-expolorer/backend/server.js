const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT||3000
const connectDb=require('./config/connectiondb')
connectDb()

app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is running on port ${PORT}`)
})