import React, { useState } from 'react';

import './Posts.css';

import posts from '../data/posts';
import Versions from './Versions';
import CommentsSection from './CommentsSection';

import {useNavigate} from "react-router-dom"
import EditPostModal from '../Userprofile/EditPostModal';

function Posts(props)
{
   const post=props?.data;
   const [modalOpen, setModalOpen] = useState(false);
   const [details, setDetails] = useState("");
   const [topicName, settopicName] = useState("");
   const [isDesc, setisDesc] = useState(false);
   const [likes, setLikes] = useState(parseInt(post?.likes));
   const [showComments,setShowComments]=useState(false);
   


   const navigate = useNavigate();
   let renderVersions=post?.versions.map((version, index) => {

    return (
     
         <Versions data={version}  topicName={settopicName} details ={setDetails}/>
        
      );

   });

   let RenderAdditionalDetails =() =>{
     if(!isDesc)
     {
       return(
        <div>

        </div>

       );

     }
     else
     {
       return(
      <div className='headerRight'>
      <p>{topicName}</p>
      <p>{details}</p>
      </div>
       );
  

     }

   };


  return(
    <div>
    <div className='post_mainContainer'>
    
    <div className='post_container'>
        <img src={post.image} className='postPic'/>
        <div className='userDetailsContainer'>
          <img src={post.userProfilePic} className='userProfilePic' onClick ={()=>{

              navigate("/Profile/"+post.userName)

          }}/>
          <div className='MoreDetails'>
          <p>{post.Name}</p>
          <button  onClick={() => {setDetails(post.description); settopicName("Description");setisDesc(!isDesc);}}>{props.data.versionName}>Read more</button>
          </div>
          
        </div>
        <div className='ExternalLinksContainer'>
          <button className='ExternalLinksButton'><a href={post.youtubeLink}><img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1024-80.jpg" className='ExternalLinksImages'/></a></button>
          <button className='ExternalLinksButton'><a href={post.githubLink}><img src="https://pngimg.com/uploads/github/github_PNG15.png" className='ExternalLinksImages'/></a></button>
          {props.own && <button className='ExternalLinksButton'
           onClick={() => {

            console.log("clicked on edit post");
            setModalOpen(true);
          }}
          >Edit post</button>}
        </div>
        <div className='versionsContainer'>
            {renderVersions} 
        </div>
        
        <div className='bottomContainer'>
            <div className='bottomContainerFooter'>
            <button className='socialButton'  onClick={() => {
              console.log({
                "postid": post.postid,
                "type":"incrementLike",
                "likes":likes+"",
                "receiver":post.userName,
                "sender":props.userdata.results.data.username
          
               });

                // Send data to the backend via POST
     fetch('enter your aws url here', {  // Enter your IP address here

     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify({
      "postid": post.postid,
      "type":"incrementLike",
      "likes":likes+"",
      "receiver":post.userName,
      "sender":props.userdata.results.data.username

     }) // body data type must match "Content-Type" header

   }).then((result) =>result.json())
   .then((result) => {
     console.log(result);
     console.log(result.playerData.userDetails);

   });
              
              
              
              
              setLikes(likes+1);
              
              
              
              
              }}> <i className="fa fa-thumbs-up fa-2x socialImage"></i></button>
            <p>{likes}</p>
            </div>
            <div  className='bottomContainerFooter'>
            <button className='socialButton'   onClick={() => {
             setShowComments(!showComments);
              

            }}> <i className="fa fa-commenting-o fa-2x socialImage"></i></button>
            <p>{post.comments.length}</p>
            </div>
            <div  className='bottomContainerFooter'>
           
            </div>
          

        </div>

        
    </div>
    <div>
     <RenderAdditionalDetails />
     </div>
     <div className='commentsSection'>
     {showComments && <CommentsSection comments={post.comments}  postid={post.postid} username={post.userName} profilepic={post.userProfilePic}/>}
     </div>
    
    </div>

    {modalOpen &&<EditPostModal setOpenModal={setModalOpen} post={post} accessToken ={props?.userdata?.accessToken} idToken ={props?.userdata?.idToken} userData={props?.userdata?.data} />}

    </div>

  );

}

export default Posts;