import React from "react";
import PostsContainer from "../homePage/PostsContainer";
import ExplorerSkeletonLoading from "../Loading/ExplorerSkeletonLoading";
import './PostsSearch.css';
function PostsSearch(props)
{


   return(
       <div className="postSearchRoot">
           <p>Posts:</p>
           <div className="postSearchContainer">
           <PostsContainer isLoading={props.data.isLoading}  data={props.data.results[0]} />
           </div>
            


       </div>
   );

}


export default PostsSearch;