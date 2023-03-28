const mongoose=require('mongoose');

const registrationSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const RegistrationModel=mongoose.model("registration",registrationSchema);
module.exports=RegistrationModel