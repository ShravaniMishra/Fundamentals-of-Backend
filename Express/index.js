const express = require("express");

const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome Bhai Log")
})

app.listen(8500,()=>{
    console.log("Server Running at port - 8500")
})