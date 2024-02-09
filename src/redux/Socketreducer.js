import * as ActionTypes from "./ActionTypes";

const SocketResults = (
  state = { websocket:null},
  action
) => {
 
  switch (action.type) {
  


      case ActionTypes.ADD_SOCKET_CONNECTED:
      return {
        ...state,
        websocket:action.payload,
      };


   
    default:
      return { ...state};
  }
};

export default SocketResults;
