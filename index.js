const {connection}=require("./Config/db");
const express=require("express")
const cors=require("cors");
const { Data } = require("./model/dataSchema");


const app=express()
app.use(express.json())

app.use(cors({origin:"*"}))

app.get("/",async(req,res)=>{
    try{
       res.send('home')
    }catch(err){
        res.send({ msg: 'data not fond' })
    }
})

app.post("/data",async(req,res)=>{
    try {
        let data=await Data.insertOne(req.body)
            res.send("data posted")
      } catch (err) {
        res.send({msg:err});
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