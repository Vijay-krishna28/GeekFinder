import Login from './login/Login';
import Home from './homePage/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import Posts from './homePage/Posts';
import Profile from './profile/Profile';
import Search from './search/Search';
import ProfileInfo from './Userprofile/ProfileInfo';
import UserProfile from './Userprofile/UserProfile';
import Inbox from './inbox/Inbox';

const store = ConfigureStore();

function App() {
  const socket =new WebSocket('enter your aws url here');
       
  return (
    <Provider store={store}>
       <Router>
          <Routes>
            <Route path="/" element={<Login />}  />
            <Route path="/home" element={<Home   socket={socket}/>}  />
            <Route path="/profile" element={<Profile/>}  />
            <Route path="/search/:searchterm" element={<Search/>}  />
            <Route path="/userProfile" element={<UserProfile/>}  />
            <Route path="/Profile/:topicid" element={<Profile/>}  />
            <Route path="/inbox" element={<Inbox/>}  />
       
            
           
          </Routes>
        </Router>
      
    </Provider>
  );
}

export default App;
