const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=new mongoose.Schema({   
name:{
    type:String,
    require:true,
    minLength:3
},
email:{
    type:String,
    require:true,
    //unique:true,
    validate(value){
        if(validator.isEmail(value)){
            throw new Error("Invalid email Id")
        }
    }
},
phone:{
    type:Number,
    require:true,
    //unique:true,
    min:10
},
address:{
    type:String,
    require:true
},
date:{
    type:Date,
    default:Date.now
}
})

const User=mongoose.model('User',userSchema);
module.exports=User;