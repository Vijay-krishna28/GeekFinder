import React,{ useState }  from "react";
import fetchUserDetailsResults, { editUserDetailsResults } from "../redux/UserGetDetailsActionCreators ";
import "./sendMessage.css";
import { connect } from "react-redux";

import fetchMessageResults, { obtainedSingleMessage } from "../redux/MessageActionCreators";
const mapStateToProps = (state) => {
  return {
    explorerResults: state.explorerresults,
    posts: state.postresults,
    userdetails:state.userdetails,
    messages:state.messages
  };
};



const mapDispatchToProps = (dispatch) => ({
 
  editUserDetails : (collegeName,cgpa,profileUrl,interests,userName,accessToken,idToken) => dispatch(editUserDetailsResults(collegeName,cgpa,profileUrl,interests,userName,accessToken,idToken)),
  fetchUserDetails : (idToken,accessToken) => dispatch(fetchUserDetailsResults(idToken,accessToken)),
  sendSingleMessage: (msg) => dispatch(obtainedSingleMessage(msg))
});



function Modal({ setOpenModal,userdetails,username,messages,sendSingleMessage}) {
  const [message, setMessage] = useState("");
 


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>send message</h1>
        </div>
        <div className="body">
          <div className="formElement">
              <p>msg : </p>
              <input type="text" value={message}
          onChange={(e) => setMessage(e.target.value)}/>
          </div>
         
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button   onClick={() => {
             
            console.log({
              "sender": userdetails.results.data.username,
              "receiver": username,
              "message": message
            });
            console.log("inside send message");
            console.log(userdetails.results.socket);

            userdetails.results.socket.send(JSON.stringify({
              "action":"sendmessage",
              "sender": userdetails.results.data.username,
              "receiver": username,
              "message": message
            }));


               // props.addMessages(socketdata.message.messages);
              
              let Index=-1;
              messages.results.map((msg,index) =>{

                  if(msg.username===username)
                  {
                    Index=index;
                    
                  }
                


               });
               if(Index!==-1)
               {
                sendSingleMessage({"message":message+"#me","index":Index});
               }
               else
               {

                sendSingleMessage({"message":message+"#me","index":Index,"sender":username});

               }

              




             setOpenModal(false);

           }}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);