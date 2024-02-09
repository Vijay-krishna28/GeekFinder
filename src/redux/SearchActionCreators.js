import searchResults from "../data/searchResults";
import * as ActionTypes from "./ActionTypes";


const fetchSearchResults = (searchterm) => (dispatch) => {
    console.log("inside Search home results");
    dispatch(searchResultsLoading());
  
      // Send data to the backend via POST
      fetch('enter your aws url here', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify({
        
         "searchterm":searchterm
      
      }) // body data type must match "Content-Type" header
 
    }).then((result) =>result.json())
    .then((result) => {

      console.log("obtained search results");
      console.log(result);
  
       dispatch(addSearchDetails(result.searchData));
  
  
   })
  .catch((err) => {
    console.log(err);
    dispatch(FailedSearchResults(err));
  });



  };
  
  
  
  export const searchResultsLoading = () => ({
    type: ActionTypes.ADD_SEARCH_RESULTS_LOADING,
    payload: null,
  });
  
  
  export const addSearchDetails = (payload) => ({
    type: ActionTypes.ADD_SEARCH_RESULTS,
    payload: payload,
  });
  
  export const FailedSearchResults = (payload) => ({
    type: ActionTypes.ADD_SEARCH_RESULTS_FAILED,
    payload: payload,
  });
  
  export default fetchSearchResults;
  
  
  
  