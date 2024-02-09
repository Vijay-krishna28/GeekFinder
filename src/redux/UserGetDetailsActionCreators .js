import messages from "../data/messages";
import * as ActionTypes from "./ActionTypes";
import { addHomeDetails } from "./HomeActionCreators";
import { addMessageDetails } from "./MessageActionCreators";
import { addNotificationDetails } from "./NotificationsActionCreators";


const fetchUserDetailsResults = (idToken,accessToken,socket) => (dispatch) => {
    console.log("inside Search home results");
    console.log(idToken);
    console.log(accessToken);
    dispatch(UserResultsLoading());

     // Send data to the backend via POST
     fetch('enter your aws url here', {  // Enter your IP address here

     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify({accessToken: accessToken,idToken : idToken}) // body data type must match "Content-Type" header

   }).then((result) =>result.json())
   .then((result) => {
     console.log(result);
     console.log(result.playerData.userDetails);

     dispatch(addNotificationDetails(result.playerData.userDetails.notifications));

     dispatch(addMessageDetails(result.playerData.userDetails.messages));
     
     dispatch(addUserDetails({data : result.playerData.userDetails,accessToken : accessToken,idToken :idToken,socket:socket}));
   

     console.log({
         
      "locations": result.playerData.userDetails.location,
      "college": result.playerData.userDetails.college,
     "topics": "",
     "username":result.playerData.userDetails.username
 
 });
       // Send data to the backend via POST
       fetch('enter your aws url here', {  // Enter your IP address here

       method: 'POST', 
       mode: 'cors', 
       body: JSON.stringify({
         
            "locations": result.playerData.userDetails.location,
            "college": result.playerData.userDetails.college,
           "topics": "",
           "username":result.playerData.userDetails.username
       
       }) // body data type must match "Content-Type" header
  
     }).then((result) =>result.json())
     .then((result) => {

       console.log("obtained home results");
       console.log(result);
   
        dispatch(addHomeDetails(result.homeData));
        
   
   
    })
   .catch((err) => {
     console.log(err);
     dispatch(FailedUserResults(err));
   });
  
  })
  .catch((err) => {
    console.log(err);
    dispatch(FailedUserResults(err));
  });  
     




  };


 export const editUserDetailsResults = (collegeName,cgpa,profileUrl,interests,userName,accessToken,idToken) => (dispatch) => {
    console.log("inside Search home results");
    dispatch(UserResultsLoading());

     // Send data to the backend via POST
     fetch('enter your aws url here', {  // Enter your IP address here

     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify( {
        
      "userName":userName,
      "collegeName":collegeName,
      "cgpa":cgpa,
      "interests":interests,
      "profileUrl":profileUrl
  }) // body data type must match "Content-Type" header

   }).then((result) =>result.json())
   .then((result) => {
     
     dispatch(fetchUserDetailsResults(idToken,accessToken ));
   })
   .catch((err) => {
     console.log(err);
     dispatch(FailedUserResults(err));
   });
  }
  
     
export const addPostUserDetailsResults = (postid,postname,username,userprofilepic,description,imageLink,youtubelink,githublink,college,location,topics,likes,comments,versions,userData,accessToken,idToken) => (dispatch) => {
    console.log("inside Search home results");

    const post={
      
      "postid":postid,
      "postname":postname,
      "username":username,
      "userprofilepic":userprofilepic,
      "description":description,
      "imageLink":imageLink,
      "youtubelink":youtubelink,
      "githublink":githublink,
      "college":college,
      "locations":location,
      "topics":topics,
      "likes":likes,
      "comments":comments,
      "versions":versions
      
      
      
  };

  console.log(post);

     // Send data to the backend via POST
     fetch('enter your aws url here', {  // Enter your IP address here

     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify(post) // body data type must match "Content-Type" header

   }).then((result) =>result.json())
   .then((result) => {  

   
    dispatch(fetchUserDetailsResults(idToken,accessToken));
     
   })
   .catch((err) => {
     console.log(err);
     dispatch(FailedUserResults(err));
   });
  
     




  };
  
  
  
  


  
  export const UserResultsLoading = () => ({
    type: ActionTypes.ADD_USER_RESULTS_LOADING,
    payload: null,
  });
  
  
  export const addUserDetails = (payload) => (
  
    {
    type: ActionTypes.ADD_USER_RESULTS,
    payload: payload,
  });
  
  export const FailedUserResults = (payload) => ({
    type: ActionTypes.ADD_USER_RESULTS_FAILED,
    payload: payload,
  });
  
  export default fetchUserDetailsResults;
  
  
  
  