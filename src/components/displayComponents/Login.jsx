import React from 'react'
import { NavLink } from 'react-router-dom'
import googleLogo from "../../images/icons8-google-48.png"

const Login=() =>{
return(
    <>
      <div className='mainLoginDiv'>
        <div className='loginCard'>
            <div className='loginTitle'>
                Log In
            </div>
            <div className='loginForm'>
                <input type='email' placeholder='acb@xyz.com'></input><br/>
                <input type='password' placeholder='Password'></input><br/>
                <p>Don't Have An account <NavLink to="/sign_up">Click Here To Register</NavLink> </p>
                <button type="submit">Submit</button><br/>
                <div className='loginHrDiv'>

                <hr className='loginHr1'/>OR
                
                </div>
                <button className='googleLogin' type="submit">Log In With  <img src={googleLogo} alt='google'></img> </button>
            </div>  
        </div>

      </div>
    </>)
}   
export default Login