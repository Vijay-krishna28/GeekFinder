import * as ActionTypes from "./ActionTypes";

const MessageResults = (
  state = { isLoading: true, errMessage: null, results: [] },
  action
) => {
 
  switch (action.type) {
    case ActionTypes.ADD_MESSAGES_LOADING:
      return { ...state, isLoading: true, errMessage: null, results: [] };

    case ActionTypes.ADD_MESSAGES_RESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

    case ActionTypes.ADD_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
        results: [],
      };
      case ActionTypes.ADD_SINGLE_MESSAGES:

      if(action.payload.index===-1)
      {
        console.log("add sinfle messages for new user");
        const singleMessage=action.payload.message;
        const sender=action.payload.sender;
        const tempstate=state.results;
        console.log(singleMessage);
        console.log(tempstate);
        const message=tempstate.push( {
          "username": sender,
          "messages": [
          singleMessage
          ],
          "profilepic": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
         });
       
       
        return {
          ...state,
          isLoading: false,
          errMessage: null,
          results: tempstate,
        };
      }
      else
      {
        console.log("add sinfle messages");
        const singleMessage=action.payload.message;
        const tempstate=state.results;
        console.log(singleMessage);
        console.log(tempstate);
        const message=tempstate[action.payload.index];
        message.messages.push(singleMessage);
        tempstate[action.payload.index]=message;
        return {
          ...state,
          isLoading: false,
          errMessage: null,
          results: tempstate,
        };

      }
       
    default:
      return { ...state};
  }
};

export default MessageResults;
