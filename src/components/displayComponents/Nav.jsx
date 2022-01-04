import React from 'react'
import {NavLink} from "react-router-dom"


const Nav=() =>{

  
  const hamClicked=()=>{
    const topnav=document.querySelector(".topnav");
    if(topnav.className==='topnav'){
      topnav.classList.add('responsive')
    }
    else{
      topnav.className='topnav'
    }
  } 
return(
    <>
      <div className='topnav'>
        

          <NavLink  activeclassname="active" to='/'>Home</NavLink>
          <NavLink  activeclassname="active" to='/video_lec'>Video Lec</NavLink>
          <NavLink  activeclassname="active" to='/notes'>Notes</NavLink>
          <NavLink  activeclassname="active" to='/test'>Mock Test</NavLink>
          <NavLink  activeclassname="active" to='/forum'>Forum</NavLink>
          <NavLink  activeclassname="active" to='/about_us'>About Us</NavLink>
          <NavLink  activeclassname="active" to='/login'>Login</NavLink>
          <NavLink  activeclassname="active" to='/sign_up'>Sign Up</NavLink>
          <NavLink  activeclassname="active" to='/profile'><i className="fa fa-user-circle-o"></i></NavLink>
          <button className='nav_hamburger' onClick={hamClicked}> 
          <i className="fa fa-bars"></i>
          </button>
      </div>
    </>)
}
export default Nav


