
export default function Signin() {
  return (
    <div>
      <form>
            <h2>Sign In</h2>
            <label htmlFor="">Email Address</label>
            <div className="input-group">
              
                <input type="text" placeholder="Email"/>
            </div>
            <p>&nbsp;</p>
            <label>Password</label>
            
            <div className="input-group">
                <input type="password" placeholder="Password"/>
            </div>
            <p>&nbsp;</p>
            
            <button type="submit" className="btn btn-secondary">Sign In</button>
        </form>
        <a href="signup.html">Not a member? Sign Up</a><br/>
        <a href="forgot-password.html">Forgot Password ? </a>
    </div>
  )
}
