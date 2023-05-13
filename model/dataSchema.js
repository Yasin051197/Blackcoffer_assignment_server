const mongoose=require("mongoose")

const dataSchema=new mongoose.Schema({
    intensity:Number,
    likelihood:Number,
    relevance:Number,
    end_year:String,
    country:String,
    topic:String,
    region:String,
})

const Data = mongoose.model('data',dataSchema);
module.exports={Data};