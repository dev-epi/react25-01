import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
export default function Signin({setLogin}) {
  const navigate = useNavigate()
const [user , setUser] = useState({})
  const login = (event)=>{
    event.preventDefault();
   
    console.log('login' , user)
    axiosInstance.post('/login' , user)
    .then(response=>{
       console.log(response)

        localStorage.setItem('token' , response)
        sessionStorage.setItem('token2' , response)
        setLogin(response)
        navigate('/')
        Swal.fire('login')
    })
    .catch(err=>{
      if(err.response.data){
        Swal.fire({
          title : err.response.data.message,
          icon : 'warning',
          toast : true,
          showConfirmButton : false,
          position : 'bottom-end',
          timer : 3000
        })
      }
    })
     

  }
  const handleChange = (event)=>{
    setUser({...user , [event.target.name] : event.target.value})
  }
  return (
    <div>
      <form  onSubmit={login}>
            <h2>Sign In</h2>
            <label htmlFor="">Email Address</label>
            <div className="input-group">
              
                <input type="text" onChange={handleChange} name="email" placeholder="Email" required/>
            </div>
            <p>&nbsp;</p>
            <label>Password</label>
            
            <div className="input-group">
                <input type="password" placeholder="Password" onChange={handleChange} name="password"/>
            </div>
            <p>{!user.password && 'Mot de passe obligatoire'}</p>
            
            <button type="submit" className="btn btn-secondary">Sign In</button>
        </form>
        <Link to="/auth/signup">Not a member? Sign Up</Link><br/>
        <a href="forgot-password.html">Forgot Password ? </a>
    </div>
  )
}
