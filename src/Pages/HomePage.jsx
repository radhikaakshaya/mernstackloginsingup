import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import EmployeesInfo from '../Components/EmployeesInfo'
import { UserAuth } from '../Context/UserContext'
import Dashboard from '../Components/Dashboard'

const HomePage = () => {

  const navigate=useNavigate()
  return (
    <div>
      <AppBar position='fixed'>
<Toolbar>
  <Typography marginRight='auto'>
    HOME
  </Typography>
  <Box>
    <Typography>
<Button variant='outline'
onClick={()=>navigate('/home/employee')}
>
  Employee-Information
</Button>
<Button variant='outline'
onClick={()=>navigate('/home/dashboard')}
>
Dashboard
</Button>
    </Typography>
  </Box>
</Toolbar>
      </AppBar>
      <Box sx={{my:10}}>
<Routes>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/employee' element={<EmployeesInfo/>}/>
</Routes>
      </Box>
    </div>
  )
}

export default HomePage