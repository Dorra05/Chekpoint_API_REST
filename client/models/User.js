let mongoose=require('mongoose');

let schema = new mongoose.Schema(
    {
        name:{type:String},
        age:{type:Number},
        email:{type:String}
    }
)
let model = mongoose.model('RestAPI',schema);
module.exports={model};