import React from 'react'
import profileImg from "../../images/register1.jpg"

const Profile=() =>{
return(
    <>
      <div className='profileMainDiv'>
            <div className='profileCardTitle'>
                <p className='profileUserName'>Mandar Sakpal</p>
                <div className='profileCardContent'>
                    <div className='profileImageDiv'>
                            <img src={profileImg} alt='profile'></img>      
                    </div>
                    <div className='profileUserDetailsDiv'>
                        <div className='profileUserDetailsTitle'>
                        </div>
                        <div className='profileUserDetails'>
                          <label> Name:
                              <input type="text" disabled={true} value='Mandar Sakpal'></input>
                          </label>
                          <label> Email:
                              <input type="email" disabled={true} value='sakpalm466@gmail.com'></input>
                          </label>
                          <label> Phone No.:
                              <input type="tel" disabled={true} value='8805688767'></input>
                          </label>
                          <label> Age:
                              <input type="number" disabled={true} value='21'></input>
                          </label>
                          <label> Gender:
                          <select disabled={true}  id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                          </label>
                          <label> Collage:
                              <input type="text" disabled={true} value='xyz'></input>
                          </label>
                          <button type='button'> Edit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>)
}
export default Profile