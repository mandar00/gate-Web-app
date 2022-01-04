import React, { useEffect,useReducer } from 'react'
import {db} from "../../misc/Firebase"
import {auth} from "../../misc/Firebase"
import {WriteToDatabase} from "../databaseFunctions/WriteFunc"
import { NavLink } from 'react-router-dom'
import {UploadFile} from "../databaseFunctions/UploadImg"




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





const Edit=() =>{

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


    const submit=()=>{
        const Name=document.querySelector("#editName").value
        const Phone=document.querySelector("#editPhone").value
        const ClgName=document.querySelector("#editClgName").value
        const Img=document.querySelector("#editImg").value
        const user=auth.currentUser
        WriteToDatabase(user,Name,Phone,ClgName,Img)
    }



return(
    <>
      <div className='profileMainDiv'>
            <div className='profileCardTitle'>
                <p className='profileUserName'>mandar sakpal</p>
                <div className='profileCardContent'>
                <div className='profileUserDetailsDiv'>
                        <div className='profileUserDetailsTitle'>
                        </div>
                        <div className='profileUserDetails'>
                          <label> Name:
                              <input id='editName' type="text" contentEditable={true} disabled={false} defaultValue={name} ></input>
                          </label>
                          <label> Email:
                              <input id='editEmail' type="email" contentEditable={true} disabled={true} defaultValue={email} ></input>
                          </label>
                          <label> Phone No.:
                              <input id='editPhone' type="tel" contentEditable={true} disabled={false} defaultValue={phoneNo} ></input>
                          </label>
                        
                          <label> Collage:
                              <input id='editClgName' type="text" contentEditable={true} disabled={false} defaultValue={clgName} ></input>
                          </label>
                          <label> Image:
                              <input onChange={UploadFile} id='editImg' type="file" disabled={false} ></input>
                          </label>
                          <NavLink  to='/profile'><button type='button' onClick={submit}> Submit</button>  </NavLink>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    </>
    )
}
export default Edit