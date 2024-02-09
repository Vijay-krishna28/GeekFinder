
import React from 'react';
import PostsContainer from './PostsContainer';


import './HomeBody.css';
import Filter from './Filter';


function HomeBody(props)
{

 
 return(
   <div className='homebodyroot'>
    <div>
    <Filter className="filter"/>
    </div>
    <div className='postContainer'>
    <PostsContainer isLoading={props.posts.isLoading}  data={props.posts.results[0]}  userdata={props.userdata}/>
    </div>

    
   </div> 
   
 );



}

export default HomeBody;