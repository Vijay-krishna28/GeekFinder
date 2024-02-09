
import React , { useEffect}from 'react';
import ProfileScroll from './ProfileScroll';
import { connect } from "react-redux";
import './HomeExplorer.css';



function HomeExplorer(props)
{

  

 return(
   <div className='root'>
     <h2 >EXPLORE:</h2>
   <ProfileScroll data={props.data} />
   </div> 
   
 );



}

export default HomeExplorer;