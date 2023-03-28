import { Box, Button, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
//import { toast } from 'react-toastify'
import { UserAuth } from '../Context/UserContext'

const LoginPage = () => {
  const navigate=useNavigate()
  const {state,UserLogin}=useContext(UserAuth)
  const [user,setUser]=useState({email:'',password:''})
  const changehandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  
  }
  const handleSubmit=(e)=>{
e.preventDefault();
UserLogin({user})
  }
 
  useEffect(()=>{
    if(state.isLogin){
      toast.success(state.isMessage);
      navigate('/home')
    }
    if(state.isError){
      toast.error(state.isMessage)

    }
  },[state])

  return (
    <div>
      <Box justifyContent='center' alignItems='center' display='flex'
      height='100vh'
      >
     
<Box sx={{display:'flex', flexDirection:'column',boxShadow:3,border:2,padding:2}}>
<h4 text='center'>SIGN IN </h4>
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
    onClick={handleSubmit}
  >Login</Button>
  <p>create new account</p>
  <Button variant='outline'
  onClick={()=>navigate('/register')}
  >Register</Button>
</Box>
      </Box>
    </div>
  )
}

export default LoginPage