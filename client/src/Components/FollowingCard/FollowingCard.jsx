import React from 'react'
import './card.css'
import { Avatar } from '@mui/material'
import avt from '../../assets/followersAvatar/avatar5.jpg'
const FollowingCard = ({avtImg,fName,lName,currentlyPersuing,followersCount,}) => {
  return (
    <div className='fcardContainer'>
        <div className="proImg">
            
            <img src={avt} alt="img" />
        </div>
        <div className="userInfo">
            <div className="name">
                <span className='fName'>{fName}</span>
                <span className="lName"> {" "+lName}</span>
            </div>
            
            <div className="cd">{currentlyPersuing}</div>
            <div className="followers">
                <span>{followersCount} </span>
                Followers
            </div>
        </div>
        <div className="fButton">
            Follow
        </div>
    </div>
  )
}

export default FollowingCard