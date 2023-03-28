import { GET_USER_LIST, USER_LOGIN, USER_REG } from "../Actions/ActionType"

export const UserReducer=(state,action)=>{
    if(action.type===USER_LOGIN){
        if(action.payload.status==200){
            return {...state,isLogin:true,
            isError:false,isMessage:action.payload.message
            }
        }else{
            return {...state,isLogin:false,
                isError:true,isMessage:action.payload.message
                }
        }
    }
    if(action.type===USER_REG){
        if(action.payload.status==200){
            return {...state,isReg:true,
            isError:false,isMessage:action.payload.message
            }
        }else{
            return {...state,isReg:false,
                isError:true,isMessage:action.payload.message
                }
        }
    }
    if(action.type===GET_USER_LIST){
        if(action.payload.status==200){
            return {...state,empInfo:action.payload.data,
            isError:false,isMessage:action.payload.message
            }
        }else{
            return {...state,isLogin:false,
                isError:true,isMessage:action.payload.message
                }
        }
    }

  
    throw new Error(`No Matching ${action.type}- action type`)
}