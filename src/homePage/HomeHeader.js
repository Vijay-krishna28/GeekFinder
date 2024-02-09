
import React ,{ useState, useEffect } from 'react';
import './HomeHeader.css';
import { connect } from "react-redux";
import {useNavigate} from "react-router-dom"
import fetchSearchResults from '../redux/SearchActionCreators';
import connectSocket from '../redux/SocketActionCreators';
import updateSocketConnection from '../redux/SocketActionCreators';
import { addNotificationDetails } from '../redux/NotificationsActionCreators';
import fetchMessageResults from '../redux/MessageActionCreators';

const mapStateToProps = (state) => {
   return {
     userdetails:state.userdetails,
     notifications:state.notifications,
     socket:state.socket,
     messages:state.messages
   };
 };

 
 const mapDispatchToProps = (dispatch) => ({
   fetchSearchResults: (searchterm) => dispatch(fetchSearchResults(searchterm)),
   connectSocket : () => dispatch(connectSocket()),
   updateSocketConnection : (socket) => dispatch(updateSocketConnection(socket)),
   updateNotifications :(payload) => dispatch(addNotificationDetails(payload)),
   fetchMessages :() =>  dispatch(fetchMessageResults())
 });
 


function HomeHeader(props)
{

  
   useEffect(() => {
      // Update the document title using the browser API

      //console.log(props.socket);

      if(props?.userdetails?.results?.data?.username)
      { 

      }
      else
      {

      }
      
          

    

    },);
  

   const displayNotification = ({ senderName, message }) => {
      let action;
  
   
      return (
        <span className="notification">{`${senderName} ${message}`}</span>
      );
    };

   const [input,setInput]=useState("");
  
   
   const [open, setOpen] = useState(false);
   const [notifications, setNotifications] = useState(props.notifications.results);

   console.log(props.userdetails);
   const navigate = useNavigate();


 return(
    <div className="mainHeader">
     
       <div className="iconDiv">
          <img  onClick={()=>navigate("/home")} className="icon" src="https://t3.ftcdn.net/jpg/03/54/95/66/360_F_354956609_tuIKYmk13UP2yNaJ4NGcsj8uTsZ4cojL.jpg" />
          <p>Geek finder</p>
         
          
       </div>

       <div className="HomeHeaderRight">
       <div className="input-element">
        <input
          className="input-tag"
          type="text"
          placeholder="Vishnu Institute Of Technology"
         value={input}
         onChange={(e) => setInput(e.target.value)}
        />
         <i className="fa fa-search fa-lg" onClick={()=>{

            if(window.location.href.includes("search"))
            {
               props.fetchSearchResults(input);

            }
            else
            {
               navigate("/search/"+input)

            }

               

         }}></i>
        
      </div>
            <button className='headerButton' onClick={()=>navigate("/inbox")}> <i className="fa fa-envelope fa-lg"></i></button>
            <button className='headerButton' onClick={()=>{setOpen(!open);}}> <i className="fa fa-bell fa-lg"></i></button>
         
            <div className='notificationContainer'>
            
            {open && (
               <div className="notifications">
                  {props.notifications.results.map((n) => displayNotification(n))}
               </div>
               )}

            </div>
            <button className='headerButton'  onClick={()=>navigate("/userProfile")}> <img className="profilePic" src= {props?.userdetails?.results?.data?.profileUrl}/></button>
               
       </div>
    </div>
   
 );



}

export default connect(mapStateToProps,mapDispatchToProps)(HomeHeader);