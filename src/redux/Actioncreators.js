import * as ActionTypes from "./ActionTypes";
import explorerData from "../data/explorerData";
import posts from '../data/posts';



let controller = new AbortController();
let signal = controller.signal;
export const fetchsearchResults = (searchInput) => (dispatch) => {
 
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;

  setTimeout(() => {
    fetch(
      `https://www.omdbapi.com/?s=${searchInput.trim()}&apikey=ad9ee299&plot=short&page=1`,
      {
        signal: signal,
      }
    )
      .then((movies) => movies.json())
      .then((result) => {
        //console.log(result);
        //dispatch(addSearch(result));
      })
      .catch((err) => {
        //dispatch(FailedSearch(err));
      });
  }, 0);
};


