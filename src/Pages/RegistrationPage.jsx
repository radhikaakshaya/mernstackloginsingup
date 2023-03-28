import { Box,Button,TextField } from '@mui/material'
import React, {useState,useEffect, useContext} from 'react'
import { UserAuth } from '../Context/UserContext'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
  const {UserRegister,state}=useContext(UserAuth);
  const navigate=useNavigate();
  const [user,setUser]=useState({firstName:'',lastName:'',email:'',password:''})
  const changehandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const RegisterHandle=(e)=>{
    UserRegister({user})
  }
  
  useEffect(()=>{
if(state.isReg){
  toast.success(state.isMessage);
  navigate('/')
}
if(state.isError){
  toast.error(state.isMessage);
}
  },[state])

  return (
    <div>
         <Box justifyContent='center' alignItems='center'
          display='flex' height='100vh'
      >
     
<Box sx={{display:'flex', flexDirection:'column',boxShadow:3,
border:2,paddingX:3,paddingY:1}}>
<h4 text='center'>SIGN UP</h4>
  <TextField
  sx={{width:300,paddingY:2}}
  placeholder='Enter FirstName'
  name='firstName'
  value={user.firstName}
  onChange={changehandler}
  />
  <TextField
  sx={{width:300,paddingY:2}}
  placeholder='Enter LastName'
  name='lastName'
  value={user.lastName}
  onChange={changehandler}
  />
  <TextField
  sx={{width:300,paddingY:2}}
  placeholder='Enter Email'
  name='email'
  value={user.email}
  onChange={changehandler}
  />
  <TextField
  sx={{width:300}}
  placeholder='Enter the Password'
  name='password'
  value={user.password}
  onChange={changehandler}
  />
  <Button
  onClick={RegisterHandle}
  >Register</Button>
  
  <Button variant='outline'
  onClick={()=>navigate('/')}
  >Back to login</Button>
</Box>
      </Box>
    </div>
  )
}

export default RegistrationPage