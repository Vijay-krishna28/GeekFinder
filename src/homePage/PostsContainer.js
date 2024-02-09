import { render } from '@testing-library/react';
import React from 'react';
import PostLoading from '../Loading/PostLoading';
import './PostContainer.css';
import Posts from './Posts';

function PostsContainer(props)
{

   
   let renderPosts;
   if (props.isLoading === false) {
      renderPosts = props?.data.map((show, index) => {
        return (
          <div key={index} className="post_render">
            <Posts data={show} own={props?.own}  userdata={props.userdata}/>
          </div>
        );
      });
    } else {
      const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
      const load = array.map((ele, index) => {
        
        return (
          <div key={index} className="post_render">
            <PostLoading />
          </div>
        );
      });
      renderPosts = load;
    }
   
   




  
   return(
       <div className='postContainerMain'>
        
         {renderPosts}
       </div>
     
   );


}


export default PostsContainer;