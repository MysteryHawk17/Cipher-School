import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import FollowingCard from '../Components/FollowingCard/FollowingCard'
import './following.css'
import { followersArray } from '../Components/FollowingCard/data'


const Following = () => {
  
  return (
    <div className='followingPage'>
        <Navbar/>
        <div className="fContainer">
            <h2 className='pageTitle'>Users Following You</h2>
            <div className="users" style={{marginTop:"1rem"}}>
              {followersArray.map((e,index)=>{
                return(<FollowingCard key={index} avtImg={e.avtImg} fName={e.fName} lName={e.lName} currentlyPersuing={e.currentlyPersuing} followersCount={e.followersCount} />)
              })}
              
            </div>
        </div>
    </div>
  )
}

export default Following