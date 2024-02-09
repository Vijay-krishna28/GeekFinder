import * as ActionTypes from "./ActionTypes";

const NotificationResults = (
  state = { isLoading: true, errMessage: null, results: [] },
  action
) => {
 
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION_LOADING:
      return { ...state, isLoading: true, errMessage: null, results: [] };

    case ActionTypes.ADD_NOTIFICATION_RESULTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        results: action.payload,
      };

    case ActionTypes.ADD_NOTIFICATION_FAILED:
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

export default NotificationResults;
