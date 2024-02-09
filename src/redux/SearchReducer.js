import * as ActionTypes from "./ActionTypes";

const SearchResults = (
  state = { isLoading: true, errMessage: null, results: [] },
  action
) => {
 
  switch (action.type) {
    case ActionTypes.ADD_SEARCH_RESULTS_LOADING:
      return { ...state, isLoading: true, errMessage: null, results: [] };

    case ActionTypes.ADD_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

    case ActionTypes.ADD_SEARCH_RESULTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
        results: [],
      };
    default:
      return { ...state};
  }
};

export default SearchResults;
