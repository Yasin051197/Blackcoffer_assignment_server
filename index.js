const {connection}=require("./Config/db");
const express=require("express")
const cors=require("cors");
const { Data } = require("./model/dataSchema");


const app=express()
app.use(express.json())

app.use(cors({origin:"*"}))


app.get("/",async(req,res)=>{
    try {
        const users = await Data.find();
        if (users.length<=0) {
          res.send({ msg: 'Users not found' });
        } else {
          res.send(users);
        }
      } catch (err) {
        res.send({msg:"Error in finding users,try again"});
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