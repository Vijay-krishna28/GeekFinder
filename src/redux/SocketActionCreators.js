import * as ActionTypes from "./ActionTypes";



 export const connectSocket = () => (dispatch) => {
  const socket =new WebSocket('enter your aws url here');

  socket.onopen = () => {
    console.log('WebSocket Client Connected');
    dispatch(updateSocketConnection(socket));
  };

  socket.onmessage = ({data})=>{
    console.log("message from server",data);

    if(data.type==="message")
    {

    }
    else
    {
      if(data.type==="notification")
      {
         dispatch(updateSocketNotification(data.message));
      }
    }


  };


  
  
  };
  
  

  

  
  export const updateSocketMessages = (payload) => ({
    type: ActionTypes.ADD_SOCKET_MESSAGE_RESULTS,
    payload: payload,
  });

   
 const updateSocketConnection = (payload) => ({
    type: ActionTypes.ADD_SOCKET_CONNECTED,
    payload: payload,
  });


  
  export const updateSocketNotification = (payload) => ({
    type: ActionTypes.ADD_SOCKET_NOTIFICAITON_RESULTS,
    payload: payload,
  });
  
  
  export default updateSocketConnection;
  
  
  
  