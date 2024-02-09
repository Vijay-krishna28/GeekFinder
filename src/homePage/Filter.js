import React ,{useState} from 'react';
import './Filter.css';
import { connect } from "react-redux";
import { addHomeDetails, FailedHomeSearch } from '../redux/HomeActionCreators';

const mapStateToProps = (state) => {
    return {
      homeresults:state.homeresults,
      userdetails:state.userdetails
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    addHomeDetails: (data) => dispatch(addHomeDetails(data)),
    FailedHomeSearch: (err) => dispatch(FailedHomeSearch(err))
    
  });
  

  

function Filter(props)
{

    const [location,setLocation]=useState("");
    
    const [college,setCollege]=useState("");
    
    const [topic,setTopic]=useState("");

  return(
    <div className='filterroot'>
        <h2>Filter by:</h2>
        <div class="box">
            <p>Location:</p>
            <input
          className="input-tag"
          type="text"
          placeholder="Vishnu"
         value={location}
         onChange={(e) => setLocation(e.target.value)}
        />
        </div>
        <div class="box">
            <p>College:</p>
            <input
          className="input-tag"
          type="text"
          placeholder="Vishnu"
         value={college}
         onChange={(e) => setCollege(e.target.value)}
        />
        </div>
        <div class="box">
            <p>:::Topic:::</p>
            <input
          className="input-tag"
          type="text"
          placeholder="Vishnu"
         value={topic}
         onChange={(e) => setTopic(e.target.value)}
        />
        </div>
        
        <button className='recriuterloginButton' onClick={()=>{

            console.log(props.userdetails);
            console.log({
         
                "locations": location,
                "college": college,
               "topics": topic,
               "username":props.userdetails.results.data.username
           
           });

             // Send data to the backend via POST
       fetch('enter your aws url here', {  // Enter your IP address here

       method: 'POST', 
       mode: 'cors', 
       body: JSON.stringify({
         
            "locations": location,
            "college": college,
           "topics": topic,
           "username":props.userdetails.results.data.username
       
       }) // body data type must match "Content-Type" header
  
     }).then((result) =>result.json())
     .then((result) => {

       console.log("obtained home results");
       console.log(result);
   
       props.addHomeDetails(result.homeData);
   
   
    })
   .catch((err) => {
     console.log(err);
     props.FailedHomeSearch(err);
   });



         }}><p>Filter</p></button>
         

    </div>

  );

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
