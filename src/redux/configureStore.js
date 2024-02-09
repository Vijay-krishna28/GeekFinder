import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import HomeResults from './Homereducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import SearchResults from './SearchReducer';
import UserDetails from './UserDetailsReducer';
import RandomUserDetails from './RandomUserDetailsReducer';
import NotificationResults from './Notificationreducer';
import SocketResults from './Socketreducer';
import MessageResults from './Messagereducer';

export const ConfigureStore=()=>{

    const store=createStore(combineReducers({
        homeresults : HomeResults,
        searchresults: SearchResults,
        userdetails : UserDetails,
        randomuserdetails:RandomUserDetails,
        notifications :NotificationResults,
        socket:SocketResults,
        messages:MessageResults

    }),composeWithDevTools(applyMiddleware(thunk)));
    return store;


};