
import React from 'react';
import HomeHeader from '../homePage/HomeHeader';

import './Profile.css';
import ProfileInfo from './ProfileInfo';

function UserProfile()
{

 return(
   <div className='profileroot'> 
    <HomeHeader />
    <ProfileInfo />
   
    
   </div> 
   
 );



}

export default UserProfile;