import './ProfileInfo.css';
import React , { useState  ,useEffect}from 'react';

import PostsContainer from '../homePage/PostsContainer';
import {connect} from 'react-redux';
import Modal from './UserDetailsModal';

import PostModal from './PostModal';


const mapStateToProps = (state) => {
    return {
     
      userdetails:state.userdetails
    };
  };
 

function ProfileInfo(props)
{

  const userData=props?.userdetails?.results?.data;
  const [modalOpen, setModalOpen] = useState(false);
  const [PostmodalOpen, setPostModalOpen] = useState(false);
   
  let value="";
  value+=userData?.topics.map((topic,index)=>{
      return topic;

  });

   return(
     <div className='profileInforoot'>
       
       {modalOpen &&<Modal setOpenModal={setModalOpen} userData ={userData} accessToken ={props?.userdetails?.results?.accessToken} idToken ={props?.userdetails?.results?.idToken} />}
        {PostmodalOpen &&<PostModal setPostModalOpen={setPostModalOpen} userData ={userData} accessToken ={props?.userdetails?.results?.accessToken} idToken ={props?.userdetails?.results?.idToken} />}

     
       <div className='leftheader'>
         <div className='leftHeaderMain' >
            <img className='profilePic' src= {userData?.profileUrl}/>
            <button  onClick={() => {
                  setModalOpen(true);
                }}>Edit details</button>

          </div>
            <p>Name :{userData?.username}</p>
            <p>College: {userData?.college}</p>
            <p>Interests: {value}</p>
            <p>Likes:{userData?.likes}</p>
            <p>Comments:{userData?.comments}</p>
            <p>Posts : {userData?.posts.length}</p>
            <button onClick={() => {
                  setPostModalOpen(true);
                }}>Create Post</button>

       </div>

       <div className='profileInfoContainer'>
        <PostsContainer isLoading={props.userdetails.isLoading}  data={userData?.posts}  own={true}  userdata={props?.userdetails?.results}/>
        </div>

     </div>


   );



}

export default  connect(mapStateToProps)(ProfileInfo);