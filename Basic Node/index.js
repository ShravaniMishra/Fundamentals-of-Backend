// How to use inbuild node package

    // const os = require("os")

    // console.log(os)
    // console.log(os.arch())
    // console.log(os.cpus())
    // console.log(os.freemem())
    // console.log(os.hostname())
    // console.log(os.homedir())



// How to use file System(fs) inbuild node packages

// const fs = require('fs')

// fs.readFile("Basic Node/something.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("Something went wrong")
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// let data;
// try{
//  data = fs.readFileSync("Basic Node/something.txt","utf-8")
//  console.log(data)

// }catch(err){
//     console.log("something i can't able to read")
//     console.log(err)
// }



// fs.writeFile("Basic Node/something.txt","\n This is my first try \n",(err)=>{
//     if(err){
//         console.log("Something went wrong")
//         console.log(err)
//     }else{
//         console.log("Data is successfully written")
//     }
// })

// try{
//   fs.writeFileSync("Basic Node/something.txt","This is my second try")
// }
// catch(err){
//     console.log(err)
// }

// fs.appendFile("Basic Node/something.txt","\nThis is my third try\n",(err)=>{
//     if(err){
//         console.log(err)
//         console.log("Data is unable to be edited")
//     }else{
//         console.log("data is successfully updated")
//     }
// })

// try{
// fs.appendFileSync("Basic Node/something.txt","\nThis is my fourth try\n")
// }catch(err){
//     console.log("some issues has occured")
//     console.log(err)
// }

// ****************************************

// How to use HTTP in Node?

const http = require("http")
const fs = require("fs")
    
const server = http.createServer((req, res)=>{
    if(req.url==="/"){
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>Welcome To My Server!</h1>")
    }
    else if(req.url==="/data"){
        fs.readFile("./data.js",(err,data)=>{
            if(err){
                res.write(err)
                res.end()
            }else{
                res.end(data)
            }
        })
        
    }else{
        res.end("Invalid End Point 😭")
    }

})
server.listen(2500,()=>{
    console.log("Running at port - 2500")
})


