import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
     const {register , handleSubmit ,watch, formState : {errors}} = useForm({mode : 'onChange'})

     const sendForm = (data)=>{
      console.log(data)
     }
  return (
    <div>
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
              
                <input type="text" placeholder="Email"/>
            </div>
            <p>&nbsp;</p>
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
