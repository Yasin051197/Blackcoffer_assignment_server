const {connection}=require("./Config/db");
const express=require("express")
const cors=require("cors");
const {JsonData} = require("./model/jsonDataSchema")




const app=express()
app.use(express.json())

app.use(cors({origin:"*"}))

app.get("/",async(req,res)=>{
    try{
        const data=await JsonData.find()
       res.send(data)
    }catch(err){
        res.send({ msg: 'data not fond' })
    }
})

app.post("/data",async(req,res)=>{
    try{
        const jsondata=await JsonData.insertMany(req.body)
        res.send("posted")
    }catch(err){
        res.send(err)
    }
})


app.listen(8080,async()=>{

    try{
         await connection;
         console.log("connected");
    }
    catch(err){
        console.log(err);
    }

    console.log("server is running on 8080")
})