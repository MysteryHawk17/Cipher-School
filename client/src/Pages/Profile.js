import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import UserBox from '../Components/User-Details/UserBox'
import UserInfo from '../Components/About User/UserInfo'


const Profile = () => {
  return (
    <div>
      <Navbar/>
      <UserBox/>
      <UserInfo/>
    </div>
  )
}

export default Profile