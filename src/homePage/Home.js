
import React,{useEffect} from 'react';
import HomeExplorer from './HomeExplorer';
import HomeHeader from './HomeHeader';
import './Home.css';
import HomeBody from './HomeBody';
import { connect } from "react-redux";
import fetchHomeResults from "../redux/HomeActionCreators";
import fetchUserDetailsResults from '../redux/UserGetDetailsActionCreators ';
import { addNotificationDetails } from '../redux/NotificationsActionCreators';
import { useNavigate } from "react-router-dom";
import { addMessageDetails } from '../redux/MessageActionCreators';

import fetchMessageResults, { obtainedSingleMessage } from "../redux/MessageActionCreators";
const mapStateToProps = (state) => {
  return {
    homeresults:state.homeresults,
    userdetails:state.userdetails,
    notifications:state.notifications,
    messages:state.messages
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchHomeResults: () => dispatch(fetchHomeResults()),
  fetchUserDetails : (idToken,accessToken,socket) => dispatch(fetchUserDetailsResults(idToken,accessToken,socket)),
  updateNotifications :(payload) => dispatch(addNotificationDetails(payload)),
  addMessages : (msg) => dispatch(addMessageDetails(msg)),
  sendSingleMessage: (msg) => dispatch(obtainedSingleMessage(msg))
});


function Home(props)
{
  const socket =new WebSocket('enter your aws url here');
  
  const navigate = useNavigate();
  useEffect(() => {

    console.log(props.userdetails);

  if(props?.userdetails?.results?.accessToken)
  {

  }
  else{
      
        if(!(window.location.href.substring(27) && window.location.href.substring(27).split("&")))
        {
          navigate("/");
          return;
        }

          const urlParams =window.location.href.substring(27).split("&");
          
          if(urlParams.length <=0)
          {
            navigate("/");

          }
          const idToken=urlParams[0].substring(9);
          const accessToken =urlParams[1].substring(13);

          if(idToken === null)
          {
            navigate("/");

          }
        

          props.fetchUserDetails(idToken,accessToken,socket);
       

        }

        
     
        socket.onopen = () => {
          console.log("socket connected");
           
        console.log(socket);
           console.log({
            "action":"handleuser",
            "userName":props.userdetails.results.data.username

         });

           socket.send(JSON.stringify({
            "action":"handleuser",
            "userName":props.userdetails.results.data.username

         }));
           
           
         };

         socket.onmessage = ({data})=>{

            let socketdata=JSON.parse(data);

            console.log(socketdata);
            console.log("message from server",socketdata.message);
        
            if(socketdata.type==="message")
            {
     
               // props.addMessages(socketdata.message.messages);
               const sender =socketdata.message.sender;
               const message =socketdata.message.message;
              let Index=-1;
               props.messages.results.map((msg,index) =>{

                  if(msg.username===sender)
                  {
                    Index=index;
                    
                  }
                


               });
               console.log(Index);
               if(Index!==-1)
               {
                props.sendSingleMessage({"message":message+"#other","index":Index});
               }
               else
               {

                props.sendSingleMessage({"message":message+"#other","index":Index,"sender":sender});

               }

              
               
        
            }
            else
            {
              if(socketdata.type==="notification")
              {
                 console.log("isnide notif");
                 //dispatch(updateSocketNotification(data.message));
                 const senderName=socketdata.message.senderName;
                 const message=socketdata.message.message;
                 console.log(message);
                 const temp=props.notifications.results;
                 temp.push({"senderName":senderName,"message":message});
                 console.log(temp);

                  props.updateNotifications(temp);




              }
            }
        
        
          };


    
     
      
          




  }, [props.userdetails.results?.data?.username]);

  /*
   <HomeExplorer data={props.explorerResults}/>
    <HomeBody    posts={props.posts}/>
    */




 return(
   <div className='root'>
     
    <HomeHeader />
    <HomeExplorer data={props.homeresults} />
    <HomeBody    posts={props.homeresults}  userdata={props.userdetails}/>
    
   
    
   </div> 
   
 );



}

export default  connect(mapStateToProps, mapDispatchToProps)(Home);