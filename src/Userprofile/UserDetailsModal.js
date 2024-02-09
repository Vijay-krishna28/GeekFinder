import React,{ useState }  from "react";
import fetchUserDetailsResults, { editUserDetailsResults } from "../redux/UserGetDetailsActionCreators ";
import "./UserDetailsModal.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    explorerResults: state.explorerresults,
    posts: state.postresults,
    userdetails:state.userdetails
  };
};



const mapDispatchToProps = (dispatch) => ({
 
  editUserDetails : (collegeName,cgpa,profileUrl,interests,userName,accessToken,idToken) => dispatch(editUserDetailsResults(collegeName,cgpa,profileUrl,interests,userName,accessToken,idToken)),
  fetchUserDetails : (idToken,accessToken) => dispatch(fetchUserDetailsResults(idToken,accessToken))
});



function Modal({ setOpenModal ,userData,editUserDetails,accessToken,idToken,fetchUserDetails }) {
  const [collegeName, setCollegeName] = useState(userData?.college);
  const [cgpa, setcgpa] = useState(userData?.cgpa);
  const [Topics, setTopics] = useState("");
  const [profileUrl, setprofileUrl] = useState(userData?.profileUrl);


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Edit your details</h1>
        </div>
        <div className="body">
          <div className="formElement">
              <p>College Name : </p>
              <input type="text" value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Cgpa : </p>
              <input type="text" value={cgpa}
          onChange={(e) => setcgpa(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Interests(give spaces between interests) : </p>
              <input type="text" value={Topics}
          onChange={(e) => setTopics(e.target.value)}/>
          </div>

          <div className="formElement">
              <p>profileUrl : </p>
              <input type="text" value={profileUrl}
               onChange={(e) => setprofileUrl(e.target.value)}/>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button   onClick={() => {
             editUserDetails(collegeName,cgpa,profileUrl,Topics,userData?.username,accessToken,idToken);
            //console.log(idToken);
            //console.log(accessToken); 
            //fetchUserDetails(idToken,accessToken);
           }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);