import React from "react";
import { NavLink } from "react-router-dom";
import signUpImg from "../../images/register3.jpg";
import {signUpFunc} from "../databaseFunctions/SignUpFunction"


const SignUp = () => {
  
  return (
    <>
      <div className="signUpMaindiv">
        <div className="mainSignUpCard">
          <div className="mainSignUpImg">
            <img src={signUpImg} alt="SignUp"></img>
          </div>




          <div className="mainSignUpForm">
              <div  className="mainSignUpFormTitle">
                Create Accout 
              </div>
              <input type="text" id="name" placeholder="Name" required></input><br/>
              <input type="email" id="email" placeholder="Acb123@xyz.com" required></input><br/>
              <input type="password" id="password" placeholder="Password" required></input><br/>
              <input type="tel" id="phoneNo" placeholder="+91 **********" required></input><br/>
              <input type="text" id="clgName" placeholder="Collage Name" required></input><br/>
              <p>Already Have An Accout?<NavLink  to='/login'> Click Here To Log In</NavLink></p>
              <button type="button" onClick={signUpFunc}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
