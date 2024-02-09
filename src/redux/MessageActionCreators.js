import messages from "../data/messages";
import * as ActionTypes from "./ActionTypes";



const fetchMessageResults = () => (dispatch) => {
    console.log("inside fetch home results");
 
  
  };
  
  
  
  export const searchMessageLoading = () => ({
    type: ActionTypes.ADD_MESSAGES_LOADING,
    payload: null,
  });
  
  
  export const addMessageDetails = (payload) => ({
    type: ActionTypes.ADD_MESSAGES_RESULTS,
    payload: payload,
  });
  
  export const FailedMessageSearch = (payload) => ({
    type: ActionTypes.ADD_MESSAGES_FAILED,
    payload: payload,
  });



  export const obtainedSingleMessage = (payload) => (
    {
    type: ActionTypes.ADD_SINGLE_MESSAGES,
    payload: payload,
  });
  
  
  export default fetchMessageResults;
  
  
  
  