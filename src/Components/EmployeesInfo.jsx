import { Box,Card, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { UserAuth } from '../Context/UserContext'

const EmployeesInfo = () => {
    const {state,get_userList}=useContext(UserAuth);
    useEffect(()=>{
get_userList();
    },[])
  return (
    <div>
        <Box justifyContent='center' alignItems='center'
      
        display='flex'>
            <Card sx={{minWidth:400}}>
<h4 sx={{text:'center'}}>Employee-Info</h4>
{
state.empInfo.length>1 ?
Object.values(state.empInfo)?.map((data)=>(
<Box key={data?._id} sx={{display:'flex',gap:4,paddingX:5}}>
<Typography>{data?.employee_name}</Typography>
<Typography>{data?.email}</Typography>
</Box>
)):(
    <Box sx={{display:'flex',gap:4}}>
<Typography>{state.empInfo.employee_name}</Typography>
<Typography>{state.empInfo.email}</Typography>

    </Box>
)
}
                </Card>

        </Box>
    </div>
  )
}

export default EmployeesInfo