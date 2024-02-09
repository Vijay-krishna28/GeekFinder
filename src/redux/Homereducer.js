import * as ActionTypes from "./ActionTypes";

const HomeResults = (
  state = { isLoading: true, errMessage: null, results: [] },
  action
) => {
 
  switch (action.type) {
    case ActionTypes.HOMERESULTS_LOADING:
      return { ...state, isLoading: true, errMessage: null, results: [] };

    case ActionTypes.ADD_HOMERESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

      case ActionTypes.ADD_HOMERESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

    case ActionTypes.HOMERESULTS_FAILED:
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

export default HomeResults;
