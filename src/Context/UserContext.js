import axios from 'axios';
import { createContext, useReducer } from 'react';
import { GET_USER_LIST, USER_LOGIN, USER_REG } from '../Actions/ActionType';
import { UserReducer } from '../Reducers/userReducer';


export const UserAuth=createContext();

const initialState={
    isLogin:false,
    isError:false,
    isMessage:'',
    empInfo:[],
    isReg:false
}

export const UserProvider=({children})=>{
    const [state,dispatch]=useReducer(UserReducer,initialState);

    const UserRegister=(props)=>{
       
        axios.post('http://localhost:9000/user/register',props.user)
        .then((res)=>{
            dispatch({type:USER_REG,payload:res.data})
        })
    }

    const UserLogin=(props)=>{
       
        axios.post('http://localhost:9000/user/login',props.user)
        .then((res)=>{
            localStorage.setItem('token',res.data.token);
            dispatch({type:USER_LOGIN,payload:res.data})
        })
    }

   const get_userList=async()=>{
await axios.post('http://localhost:9000/user/getuser',{},{
    headers:{authorization:`bearer ${localStorage.getItem('token')}`}
}).then((res)=>{
    dispatch({type:GET_USER_LIST,payload:res.data})
}).catch((error)=>console.log(error))
}

    return(
        <>
        <UserAuth.Provider value={{state,dispatch,UserLogin,
            UserRegister,get_userList}}>
            {children}
        </UserAuth.Provider>
        </>
    )
}