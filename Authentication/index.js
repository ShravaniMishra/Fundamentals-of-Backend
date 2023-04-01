const express = require("express")
const {connection} = require(`./Config/db`)
const {RegisterModel} = require(`./Models/RegisterModel`)

require('dotenv').config()
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome It's a trial")
})

app.post("/register",async(req,res)=>{
    try{
        let registers=req.body
        let data =new RegisterModel(registers)
        await data.save()
        res.send(data)

    }
    catch(err){
        console.log(err)
    }
})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
        let result = await RegisterModel({email,password})
        res.send(result)
    }catch(err){
        console.log(err)
    }
})

app.listen(process.env.Port, async ()=>{
    try{
        await connection
        console.log(`Connected to Database`)
    }
    catch(err){
        console.log(err)
    }
    console.log(`Running at port ${process.env.Port}`)
})