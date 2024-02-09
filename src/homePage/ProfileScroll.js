import React from "react";
import "./ProfileScroll.css";
import {useNavigate} from "react-router-dom"
import ExplorerSkeletonLoading from "../Loading/ExplorerSkeletonLoading";

function ProfileScroll(props) {

  const navigate = useNavigate();
  let render_movies;
  // console.log(props.data);
  if (props.data.isLoading === false) {
    render_movies = props.data.results[1].map((show, index) => {
      return (
        <div key={index} className="movie_render">
          <img src={show.profileUrl} alt="loading"  onClick ={()=>{

          navigate("/Profile/"+show.username)

          }}/>
        </div>
      );
    });

 

  } else {
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const load = array.map((ele, index) => {
      return (
        <div key={index} className="movie_render">
          <ExplorerSkeletonLoading />
        </div>
      );
    });
    render_movies = load;
  }

  return (
   
      <div className="container_movies">{render_movies}</div>
    
  );
}

export default ProfileScroll;