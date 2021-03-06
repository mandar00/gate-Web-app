import React, { useEffect,useReducer } from 'react'
import { NavLink } from 'react-router-dom';
import {db} from "../../misc/Firebase"
import {auth} from "../../misc/Firebase"


const initialState={
    name:null,
    email:null,
    phoneNo:null,
    clgName:null
};

const reducer=(state,action)=>{
   switch(action.type){
      case "FETCH_SUCCESS" :{
        return{...state,name:action.name,email:action.email,phoneNo:action.phoneNo,clgName:action.clgName}
      }
      default:
          return state;
   }
}




const Profile=() =>{

const[{name,email,phoneNo,clgName},dispatch]=useReducer(reducer,initialState)





    useEffect(()=>{
             async function Read(){

                const user=auth.currentUser
                console.log(user)
                try {
                    if(user){
                        const dataref= db.collection("users").doc(user.uid);
                        const datasnap=await dataref.get();
                        if(datasnap){
                            console.log(datasnap)
                            const Data=datasnap.data()
                            dispatch({type:"FETCH_SUCCESS",name:Data.name,email:Data.email,phoneNo:Data.phone,clgName:Data.clgName})

                        }
                      
                        
                    }
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
           Read();
        
    },[])
    const user=auth.currentUser

return(
    <>
      <div className='profileMainDiv'>
            <div className='profileCardTitle'>
                <p className='profileUserName'>{name}</p>
                <div className='profileCardContent'>
                    <div className='profileImageDiv'>
                            <img src={user.photoURL} alt='profile'></img>      
                    </div>
                    <div className='profileUserDetailsDiv'>
                        <div className='profileUserDetailsTitle'>
                        </div>
                        <div className='profileUserDetails'>
                          <label> Name:
                              <input type="text" disabled={true} value={`${name}`}></input>
                          </label>
                          <label> Email:
                              <input type="email" disabled={true} value={`${email}`}></input>
                          </label>
                          <label> Phone No.:
                              <input type="tel" disabled={true} value={`${phoneNo}`}></input>
                          </label>
                        
                          <label> Collage:
                              <input type="text" disabled={true} value={`${clgName}`}></input>
                          </label>
                          <NavLink  to='/profile/edit'><button type='button'> Edit</button>  </NavLink>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>)
}
export default Profile