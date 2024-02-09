import * as ActionTypes from "./ActionTypes";


const fetchRandomUserDetailsResults = (username) => (dispatch) => {
    
    dispatch(RandomUserResultsLoading());

     // Send data to the backend via POST
     fetch('enter your aws url here', {  // Enter your IP address here

     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify({username:username}) // body data type must match "Content-Type" header

   }).then((result) =>result.json())
   .then((result) => {
     console.log(result);
     console.log(result.playerData.userDetails);

     
     
     dispatch(RandomaddUserDetails(result.playerData.userDetails));
   })
   .catch((err) => {
    console.log(err);
    dispatch(RandomFailedUserResults(err));
  });  
     




  };


  export const RandomUserResultsLoading = () => ({
    type: ActionTypes.ADD_RANDOMUSER_RESULTS_LOADING,
    payload: null,
  });
  
  
  export const RandomaddUserDetails = (payload) => (
  
    {
    type: ActionTypes.ADD_RANDOMUSER_RESULTS,
    payload: payload,
  });
  
  export const RandomFailedUserResults = (payload) => ({
    type: ActionTypes.ADD_RANDOMUSER_RESULTS_FAILED,
    payload: payload,
  });
  
  export default fetchRandomUserDetailsResults;
  
  
  
  