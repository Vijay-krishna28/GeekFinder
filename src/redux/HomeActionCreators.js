import * as ActionTypes from "./ActionTypes";
import posts from '../data/posts';

const fetchHomeResults = () => (dispatch) => {
    console.log("inside fetch home results");
    dispatch(searchHomeLoading());
  
  };
  
  
  
  export const searchHomeLoading = () => ({
    type: ActionTypes.HOMERESULTS_LOADING,
    payload: null,
  });
  
  
  export const addHomeDetails = (payload) => ({
    type: ActionTypes.ADD_HOMERESULTS,
    payload: payload,
  });
  
  export const FailedHomeSearch = (payload) => ({
    type: ActionTypes.HOMERESULTS_FAILED,
    payload: payload,
  });
  
  export default fetchHomeResults;
  
  
  
  