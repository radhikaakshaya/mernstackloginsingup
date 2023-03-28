const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../Models/RegistrationModel')
const Emp=require('../Models/EmployeeModel')

//Registration API

const registrationService=async(req,res)=>{
let {firstName,lastName,email,password}=req.body;
try {
    const existingUser=await User.findOne({email:email});
    if(existingUser){
        res.json({
            status:400,
            message:'An acccount with this email already exists'
        })
    }else{
        const salt=await bcrypt.genSalt(10);
        password=await bcrypt.hash(password,salt);
        const newUser=new User({
            firstName,lastName,email,password
        })
        await newUser.save().then((data)=>{
res.json({
    status:200,
    data:data,
    message:'Successfully Registered'
})
        }).catch((error)=>{
            res.json({
                status:400,
                message:error
            })
        })
    }
} catch (error) {
    res.json({
        status:401,
        message:error
    })
}
}
//Login API
const loginService=async(req,res)=>{
let {email,password}=req.body;
const existingUser=await User.findOne({email:email});
if(!existingUser){
    res.json({
        status:400,
message:'User doesnt exist please Register'
    })
}else{
    if(await bcrypt.compare(password,existingUser.password)){
        const token=jwt.sign({
            user:existingUser
        },process.env.JWT_SECRET)

        res.json({
            status:200,
            message:'Login Success',
            token:token
        })
    }else{
        res.json({
            status:400,
            message:'Password mismatch'
        })
    }
   
}
}

// USER INSERT API

const insertEmp=async(req,res)=>{
    const {email,employee_id,employee_name,role,role_id}=req.body;
    const existingUser=await User.findOne({email:email});
    console.log(existingUser,'exuser')
    if(existingUser){
        console.log('inemp')
        const emp_info=new Emp({
            email,employee_id,employee_name,role,role_id
        })
        await emp_info.save().then((data)=>{
            res.json({
                status:200,
                data:data,
                message:'Employee Record Inserted Successfully'
            })
        }).catch((error)=>{
            res.json({
                status:401,
                message:error
            })
        })
    }else{
            res.json({
                status:401,
                message:'Employee Record not found please Register'
            })
    }
}

const getUserList=async(req,res)=>{
    jwt.verify(req.token,process.env.JWT_SECRET,async(err,auth)=>{
        if(err){
            res.json({
                status:400,
                message:'Invalid Token',
                error:err
            })
        }else{
        const existingUser=await Emp.findOne({email:auth.user.email});
        if(existingUser?.role_id==1){
            await Emp.find({}).then((user)=>{
                res.json({
                    data:user,
                    status:200,
                    message:"Employee_Admin"
                })
            }).catch((error)=>{
                res.json({
                    error:error
                })
            })
        }else if(existingUser?.role_id==2){
            let user_info=[];
            await Emp.find({}).then((user)=>{
              //  console.log(user,'user')
for(let i=0;i<=user.length;i++){
    if(user[i]?.role_id!==1){
        console.log(user[i],'iiii')
        user_info.push(user[i])
    }
}

res.json({
    status:200,
    data:user_info
})
            }).catch((error)=>{
                res.json({error:error})
            })
        }else if(existingUser?.role_id==4){
            await Emp.findOne({email:auth.user.email},{}).then((data)=>{
                res.json({
                    status:200,
                    data:data
                })
            }).catch((error)=>{
                res.json({status:400,message:error})
            })
        }else{
            res.json({
                status:401,
                message:"No Record"
            })
        }
        }
    })

}

module.exports={registrationService,loginService,insertEmp,getUserList}