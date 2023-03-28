const express= require('express');
const Router=express.Router();
const userService=require('../Services/UserService');
const VerifyToken=require('../Utils/verifyToken')

Router.post('/register',userService.registrationService);
Router.post('/login',userService.loginService)
Router.post('/empinfo',userService.insertEmp)
Router.post('/getuser',VerifyToken.verifyToken,userService.getUserList)

module.exports=Router;