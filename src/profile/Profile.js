
import React,{useEffect}  from 'react';
import HomeHeader from '../homePage/HomeHeader';
import fetchRandomUserDetailsResults from '../redux/RandomUserGetDetailsActionCreators';

import { connect } from "react-redux";
import './Profile.css';
import ProfileInfo from './ProfileInfo';


const mapStateToProps = (state) => {
  return {
    randomuserdetails:state.randomuserdetails,
    
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchRandomUserDetailsResults: (username) => dispatch(fetchRandomUserDetailsResults(username))
});






function Profile(props)
{


  useEffect(() => {

          const urlParams =window.location.href.substring(30);
          console.log(urlParams);
          console.log(props.username);
          props.fetchRandomUserDetailsResults(urlParams);
      


  }, []);


 return(
   <div className='profileroot'> 
    <HomeHeader />
    <ProfileInfo data={props.randomuserdetails}/>
   
    
   </div> 
   
 );



}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);