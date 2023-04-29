import axios from 'axios'
import { REGISTER_FAIL } from '../types/authType'
export const userRegister = (data)=>{
   
    return async (dispatch)=>{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         
        }  
         try {
            console.log(data,'data')
            const response = await axios.post("http://localhost:5000/api/user-register",data,config)
            console.log(response.data,'data')
        } catch (error) {
            dispatch({

            })
        }
    }
}