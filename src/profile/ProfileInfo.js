import './ProfileInfo.css';
import React , {useState  , useEffect}from 'react';

import PostsContainer from '../homePage/PostsContainer';

import Modal from './sendMessage';



function ProfileInfo(props)
{
  
  console.log(props.data);

  const profile=props.data.results;
  const [modalOpen, setModalOpen] = useState(false);
  
   return(
     <div className='profileInforoot'>
      {modalOpen &&<Modal setOpenModal={setModalOpen} username={profile.username} />}
      
       <div className='leftheader'>
           <div className="leftHeaderSection">
           <img className='profilePic' src={profile.profileUrl}/>
            <button  onClick={() => {
                  setModalOpen(true);
                }}>Send message</button>

           </div>
            <p>Name :{profile.username}</p>
            <p>College: {profile.college}</p>
            <p>Interests: {profile.topics?.length}</p>
            <p>Likes:{profile.likes}</p>
            <p>Comments:{profile.comments}</p>
            <p>Posts : {profile.posts?.length}</p>

       </div>

       <div className='profileInfoContainer'>
        <PostsContainer isLoading={props.data.isLoading}  data={props.data.results.posts}/>
        </div>

     </div>


   );



}

export default ProfileInfo;