import * as ActionTypes from "./ActionTypes";



const fetchNotificationResults = (newPayload) => (dispatch) => {
    console.log("inside fetch home results");
    dispatch(searchNotificationLoading());
  
  };
  
  
  
  export const searchNotificationLoading = () => ({
    type: ActionTypes.ADD_NOTIFICATION_LOADING,
    payload: null,
  });
  
  
  export const addNotificationDetails = (payload) => ({
    type: ActionTypes.ADD_NOTIFICATION_RESULTS,
    payload: payload,
  });
  
  export const FailedHomeSearch = (payload) => ({
    type: ActionTypes.ADD_NOTIFICATION_FAILED,
    payload: payload,
  });
  
  export default fetchNotificationResults;
  
  
  
  