import { useEffect,useState } from "react";

import { connect } from "react-redux";
import HomeHeader from "../homePage/HomeHeader";
import fetchMessageResults, { obtainedSingleMessage } from "../redux/MessageActionCreators";

import './Inbox.css';

const mapStateToProps = (state) => {
    return {
      userdetails:state.userdetails,
      messages:state.messages
    };
  };


  
 
 const mapDispatchToProps = (dispatch) => ({
  fetchMessageresults :() =>  dispatch(fetchMessageResults()),
  sendSingleMessage: (msg) => dispatch(obtainedSingleMessage(msg))

  });
  
 


function Inbox(props)
{
    
    const [messages,setMessages]=useState([]); 
    
    const [messagesEnd,setmessagesEnd]=useState([]); 
    const [receiver,setReceiver]=useState(""); 
    const [Index,setIndex]=useState(0); 
    

    const userdetails=props.userdetails;

      

    let render_messages;
        useEffect(()=>{

            console.log("inside use effect stage");
           
          /*  render_messages=messages.map((msg,index)=>{

                return(
                    <div>
                        {msg.includes("me") ? <p className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>{msg}</p> : <p className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft:'48px' }}>{msg}</p>}
                    </div>
        
                );
        
        
            });*/
        
          

        },[props.messages]);


        render_messages=messages.map((msg,index)=>{

            return(
                <div>
                    {msg.includes("#me") ? <p className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>{msg}</p> : <p className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft:'48px' }}>{msg}</p>}
                </div>
    
            );
    
    
        });
        

   
       
    const [input,setInput]=useState("");

    let render_profiles;
 


 
   
    if(props.messages.isLoading===false)
    {
        render_profiles = props.messages.results.map((show, index) => {
           
            return (
                <div className="messageUserProfile">
                    <div className="messageProfileSubContainer">
                      <img onClick={()=>{

                            setMessages(show.messages);
                            setReceiver(show.username);
                            setIndex(index);
                           
                      }} className="msgProfilePic"src={show.profilepic}/>
                      <p>{show.username}</p>
                    </div>
                    <p>Last message</p>


                </div>


            );
          });
    

    }
    else
    {



    }
   
     


   return(
    <div className ="InboxContainer">
       <HomeHeader />
        <div className="messagesSection">
            <div className="profilesContainer">
                <p >Inbox:</p>
                {render_profiles}

            </div>
            <div className="messagesContainer">
                <div className="messages">
               {render_messages}
               </div>
               <div style={{ float:"left", clear: "both" }}
                  >
                </div>
               <div className="inputMessages">
               <input
                    className="input-tag"
                    type="text"
                    placeholder="Vishnu Institute Of Technology"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
               <button className="recriuterloginButton" onClick={()=>{
  
                        console.log({
                            "sender": userdetails.results.data.username,
                            "receiver": receiver,
                            "message": input
                        });
                        console.log("inside send message");
                        console.log(userdetails.results.socket);
                        props.sendSingleMessage({"message":input+"#me","index":Index});
                        userdetails.results.socket.send(JSON.stringify({
                            "action":"sendmessage",
                            "sender": userdetails.results.data.username,
                            "receiver": receiver,
                            "message": input
                        }));

                     


               }}><p>Send</p></button>
               </div>

            </div>



        </div>


    </div>


   );




}

export default connect(mapStateToProps,mapDispatchToProps)(Inbox);