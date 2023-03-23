const express = require("express")
const {connection,MovieModel} = require("./db.js")

const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Database")
})

app.get("/data",(req,res)=>{
    console.log(req.body)
    res.send("Here an having all the data")
})

app.post("/addData",async(req,res)=>{
    let data = req.body
    let movie = new MovieModel(data)
    await movie.save()
    res.send("user can able to post the data") 
})

app.listen(4500,async()=>{
    try{
        await connection
        console.log("Data is stored in the database")
    }
    catch(err){
        console.log(err)
    }
    console.log("Running on port - 4500")
})