const express = require("express");

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    console.log(req.body)
    res.send("Welcome Bhai Log")
})

app.post("/addData",(req,res)=>{
    console.log(req.body)
    res.send("data has been added")
})

app.listen(8500,()=>{
    console.log("Server Running at port - 8500")
})