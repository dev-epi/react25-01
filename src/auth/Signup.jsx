import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import Swal from "sweetalert2";

export default function Signup() {
     const {register , handleSubmit ,watch, formState : {errors}} = useForm({mode : 'onChange'})

     const sendForm = (data)=>{
        axiosInstance.post('/register' , data)
        .then(response=>{
          console.log(response)
        }).catch(err=>{
          Swal.fire(err.message)
        })
     }
  return (
    <div className="form">
      <form  onSubmit={handleSubmit(sendForm)}>
            <h2>Sign Up</h2>
            <label htmlFor="" >Last Name</label>
            <div className="input-group">
                <input type="text" placeholder="Last Name" 
                {...register('lastName' , {required : 'Last name is required' , 
                minLength : {value : 3 , message : 'At least 3 caracters'} })} />
            </div>
            <p style={{color : 'red'}}>{errors.lastName && errors.lastName.message} </p>
            <label htmlFor="">First Name</label>
            <div className="input-group">
                <input type="text" placeholder="First Name"/>
            </div>
            <p>&nbsp;</p>
            <label htmlFor="">Email Address</label>
            <div className="input-group">
              
                <input type="text" placeholder="Email" 
                {...register('email' , {pattern : {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
                 message:"Invalid Format"}})}/>
            </div>
            <p>{errors.email && errors.email.message}</p>
            <label>Password</label>
            
            <div className="input-group">
                <input type="password" placeholder="Password" {...register('password')}/>
            </div>
            <p>&nbsp;</p>
            <label>Confirm Password</label>
            
            <div className="input-group">
                <input type="password" placeholder="Confirm Password" 
                {...register('confirmPassword' , {validate : (value)=> watch('password')=== value || 'Passwor not valid'})}/>
            </div>
            <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
            <button type="submit" className="btn btn-secondary">Sign Up</button>
        </form>
        <Link to="/auth/signin">Already have an account ? Sign in</Link><br/>
    </div>
  )
}
