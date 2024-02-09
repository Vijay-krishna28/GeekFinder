import React from "react";
import ProfileLoading from "../Loading/ProfileLoading";
import './PeopleSearch.css';

import {useNavigate} from "react-router-dom"
function PeopleSearch(props)
{
   
  const navigate = useNavigate();
    let render_movies;
    // console.log(props.data);
    if (props.data.isLoading === false) {
      render_movies = props.data.results[1].map((show, index) => {
        return (
          <div key={index} className="people_render">
            <img src={show.profileUrl} alt="loading"  onClick ={()=>{

          navigate("/Profile/"+show.username)

          }}/>
            <div className="people_render_content">
                   <p>Name:{show.username}</p>
                   <p>description :{show.description}</p>
                   <p>Interests : {show.topics}</p>

            </div>
          </div>
        );
      });
    } else {
      const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
      const load = array.map((ele, index) => {
        return (
          <div key={index} className="people_render">
            <ProfileLoading />
          </div>
        );
      });
      render_movies = load;
    }
  

   return(
       <div className="peopleSearchRoot">
           <p>People:</p>
           <div className="peopleSearchContainer">
           {render_movies}
           </div>
            


       </div>
   );

}


export default PeopleSearch;