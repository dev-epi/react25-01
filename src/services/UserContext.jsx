import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";
import Swal from "sweetalert2";




export const UserContext = createContext();

export const UserProvider = ({children})=>{

    const [user , setUser] = useState({})
    const [token , setToken] = useState(localStorage.getItem('token'))


    const logout = ()=>{
        localStorage.clear();
        setToken(null)
    }
    useEffect(()=>{
      loadData()
    },[])
    const loadData = ()=>{
      axiosInstance.get('/auth')
      .then(data=>{
        console.log(data)
        setUser(data)
      })
      .catch(()=>{
       localStorage.clear()
        // logout()
        // logout
      })
    }
  
    const add = (skill)=>{
      console.log(skill , 'from profile')
      setUser({...user , skills : [...user.skills , skill]})
      updateUser()
    }
  
    const updateUser = ()=>{
      axiosInstance.put('/update-user/'+user._id , user)
      .then(res=>{
        console.log(res)
      })
    }
    const login = (event , u)=>{
        event.preventDefault();
       
        console.log('login' , u)
        axiosInstance.post('/login' , u)
        .then(response=>{
           console.log(response)
    
            localStorage.setItem('token' , response)
            sessionStorage.setItem('token2' , response)
            setToken(response)
           
            Swal.fire('login')
        })
        .catch(err=>{
          if(err){
            Swal.fire({
              title : err.message,
              icon : 'warning',
              toast : true,
              showConfirmButton : false,
              position : 'bottom-end',
              timer : 3000
            })
          }
        })
         
    
      }
    return <UserContext.Provider value={{user , add , token , logout , login}}>
        {children}
    </UserContext.Provider>
}