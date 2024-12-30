const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const connectDb=require('./config/connectiondb')
const PORT=process.env.PORT||3000

connectDb()

app.use("/recipe",require("./routes/recipe"))
app.listen(PORT,(err)=>{
    console.log(`app is running on port ${PORT}`)
})