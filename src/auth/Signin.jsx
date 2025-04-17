import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import { UserContext } from "../services/UserContext";
export default function Signin() {
  const navigate = useNavigate()
const [user , setUser] = useState({})
 let {login} = useContext(UserContext)
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
