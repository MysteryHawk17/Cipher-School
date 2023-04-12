import React, { useState } from 'react'
import './card.css'
import { Avatar } from '@mui/material'
import avt from '../../assets/followersAvatar/avatar5.jpg'
const FollowingCard = ({avtImg,fName,lName,currentlyPersuing,followersCount,isFollowing}) => {
    const[following,setFollowing]=useState(isFollowing);
    const handleClick=()=>{
        setFollowing(!following);
    }
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
        {following?<div className="uButton" onClick={handleClick}>
            Unfollow
        </div>:<div className="fButton" onClick={handleClick}>
            Follow
        </div>}
        
    </div>
  )
}

export default FollowingCard