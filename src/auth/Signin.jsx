import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const navigate = useNavigate()
const [user , setUser] = useState({})
  const login = (event)=>{
    event.preventDefault();
   
    console.log('login' , user)
    axios.post('http://localhost:3000/login' , user)
    .then(response=>{
       
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
            <p>&nbsp;</p>
            
            <button type="submit" className="btn btn-secondary">Sign In</button>
        </form>
        <a href="signup.html">Not a member? Sign Up</a><br/>
        <a href="forgot-password.html">Forgot Password ? </a>
    </div>
  )
}
