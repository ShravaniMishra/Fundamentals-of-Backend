const express = require("express")
const {connection} = require(`./Config/db`)
const {CakeModel} = require(`./Models/CakeModel`)

require('dotenv').config()
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome It's a trial")
})

app.post("/add",async(req,res)=>{
    try{
        let cake=req.body
        let data =new CakeModel(cake)
        await data.save()
        res.send(data)

    }
    catch(err){
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