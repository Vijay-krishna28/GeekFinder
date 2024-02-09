
import React , { useEffect}from 'react';
import HomeHeader from '../homePage/HomeHeader';
import './Search.css';

import {connect} from 'react-redux';
import fetchSearchResults from '../redux/SearchActionCreators';
import PeopleSearch from './PeopleSearch';
import PostsSearch from './PostsSearch';


const mapStateToProps = (state) => {
    return {
      searchResults: state.searchresults,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    fetchSearchResults: (searchterm) => dispatch(fetchSearchResults(searchterm)),
  });
  


function Search(props)
{

    useEffect(() => {

      const urlParams =window.location.href.substring(29);

      console.log(urlParams);



        props.fetchSearchResults(urlParams);
      }, []);

 return(
   <div className='searchroot'> 
    <HomeHeader className ="header"/>
    
    
    
    <PeopleSearch  data={props.searchResults} className="peopleSearch"/>
   
    <PostsSearch data={props.searchResults} className="peopleSearch"/>
    
   </div> 
   
 );



}

export default connect(mapStateToProps,mapDispatchToProps)(Search);