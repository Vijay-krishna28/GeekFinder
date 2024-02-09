import React, { useState }from 'react';
import './CommentsSection.css';
import {useNavigate} from "react-router-dom"
import comments from '../data/comments';
function CommentsSection(props)
{  const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [commentsdata,setCommentsdata]=useState(props.comments);

  const render_comments=commentsdata.map((comment, index) => {
    return (
        <div className='eachcomment'>
            <div className='eachcommentuserdata'>
            <img src={comment.userprofilepic}   onClick ={()=>{

            navigate("/Profile/"+comment.username)

            }}/>
            <p>{comment.username}</p>
            </div>
            <p>{comment.comment}</p>

        </div>
    );
  });



   return(
  <div className='commentsContainer'>
      <p>Comments:</p>
  <div className='userInputContainer'>
    <input  className='commentInput' value={comment}    onChange={(e) => setComment(e.target.value)}/>
    <button    onClick={() => {
              
      const commentsdata1=[...commentsdata,  {
        "postid": props.postid,
        "type":"commenting",
        "username":props.username,
        "userprofilepic":props.profilepic,
        "comment":comment
        
     }] ;

     setCommentsdata(commentsdata1);


              // Send data to the backend via POST
   fetch('enter your aws url here', {  // Enter your IP address here

   method: 'POST', 
   mode: 'cors', 
   body: JSON.stringify(
    {
        "postid": props.postid,
        "type":"commenting",
        "username":props.username,
        "profilepic":props.profilepic,
        "comment":comment
        
     }
     
     ) // body data type must match "Content-Type" header

 }).then((result) =>result.json())
 .then((result) => {
   console.log(result);
   console.log(result.playerData.userDetails);

 });
}}
         >Submit</button>
    </div>
    <div className='commentsDivision'>
     {render_comments}
     </div>
  </div>
   


   );



}

export default CommentsSection;