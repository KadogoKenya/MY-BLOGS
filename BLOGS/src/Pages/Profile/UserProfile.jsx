import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Profile_Avatar from '../../assets/farmThree.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import './UserProfile.css'

function UserProfile() {
  const [avatar, setAvatar] = useState(Profile_Avatar)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setCurrentPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setConfirmNewPassword] = useState('')
  

  return (
    <section className="profile">
        <div className="profile_container">
            <Link to = {`/myposts/sdfsdf`} className ='btn' ></Link>
            <div className="profile_details">
              <div className="avatar_wrapper">
                  <div className="profile_avatar">
                    <img src= {avatar} alt= " image "/>

                  </div>
                  <form className="avatar_form">
                      <input type='file' name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png,jpg,jpeg' />
                      <label htmlFor="avatar"><FaEdit /></label>
                  </form>
                  <button className='profile_avatar_btn'> <FaCheck /> </button>
              </div>
              <h1>Name of current user</h1>

              <form className="profile_form">
                  <p className="form_error-messange">This is an error messange</p>

                  <input type="text" placeholder='Full name' value={name} onChange={e => setName (e.target.value)} />
                  <input type="text" placeholder='Email' value={email} onChange={e => setEmail (e.target.value)} />
                  <input type="text" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword (e.target.value)} />
                  <input type="text" placeholder='New Password' value={newPassword} onChange={e => setNewPassword (e.target.value)} />
                  <input type="text" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e => setConfirmNewPassword (e.target.value)} />

                  <button type='submit' className="btn-primary">Update Details</button>
              </form>
            </div>
        </div>
    </section>
  )
}

export default UserProfile