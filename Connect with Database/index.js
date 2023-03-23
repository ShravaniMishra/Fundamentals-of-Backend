const express = require("express")
const {connection,MovieModel} = require("./db.js")

const app= express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Database")
})

app.get("/data",async(req,res)=>{
    try{
    const users=await MovieModel.find()
    res.send(users)
    }
    catch(err){
        console.log(err)
    }
    
})

app.post("/addData",async(req,res)=>{
    let data = req.body
    let movie = new MovieModel(data)
    await movie.save()
    res.send("user can able to post the data") 
})
app.patch("/editusers/:userID",async (req,res)=>{
const userID=req.params.userID
const payload=req.body
try{
const query=await MovieModel.findByIdAndUpdate({_id:userID},payload)
}catch(err){
console.log(err)
res.send({"err":"something went wrong"})
}
})

app.delete("/removeuser/:userID",async (req,res)=>{
const userID=req.params.userID
try{
await MovieModel.findByIdAndDelete({_id:userID})
res.send(`User with user id ${userID} has been deleted from the database`)
}catch(err){
console.log(err)
res.send({"err":"something went wrong"})
}
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