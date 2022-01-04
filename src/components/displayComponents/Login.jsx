import { NavLink } from 'react-router-dom'
import googleLogo from "../../images/icons8-google-48.png"
import {login} from "../databaseFunctions/LoginFunc"
import { GoogleLogin } from '../databaseFunctions/LoginFunc'

const Login=() =>{  
  

  
return(
    <>
      <div className='mainLoginDiv'>
        <div className='loginCard'>
            <div className='loginTitle'>
                Log In
            </div>  
            <div className='loginForm'>
                <input type='email' id='loginEmail' placeholder='acb@xyz.com'></input><br/>
                <input type='password' id='loginPassword'  placeholder='Password'></input><br/>
                <p>Don't Have An account <NavLink  to="/sign_up">Click Here To Register</NavLink> </p>
                <button type="submit" onClick={login} >Submit</button><br/>
                <div className='loginHrDiv'>

                <hr className='loginHr1'/>OR
                
                </div>
                <button className='googleLogin' type="submit" onClick={GoogleLogin}>Log In With  <img src={googleLogo} alt='google'></img> </button>
            </div>  
        </div>

      </div>
    </>)
}   
export default Login