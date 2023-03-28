const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    employee_id:{
        type:Number,
        required:true
    },
    employee_name:{
        type:String,
        required:true
    },
    role_id:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

const EmployeeModel=mongoose.model("employeeinfo",employeeSchema);
module.exports=EmployeeModel