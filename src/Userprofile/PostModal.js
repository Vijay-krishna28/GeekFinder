import React,{ useState }  from "react";
import fetchUserDetailsResults, { editUserDetailsResults } from "../redux/UserGetDetailsActionCreators ";
import "./PostModal.css";

import { addPostUserDetailsResults } from "../redux/UserGetDetailsActionCreators ";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    explorerResults: state.explorerresults,
    posts: state.postresults,
    userdetails:state.userdetails
  };
};



const mapDispatchToProps = (dispatch) => ({
 
  createpost : (postid,postname,username,userprofilepic,description,imageLink,youtubelink,githublink,college,location,topics,likes,comments,versions,userData,accessToken,idToken) => dispatch(addPostUserDetailsResults(postid,postname,username,userprofilepic,description,imageLink,youtubelink,githublink,college,location,topics,likes,comments,versions,userData,accessToken,idToken)),
});



function PostModal({ setPostModalOpen ,userData,editUserDetails,accessToken,idToken,fetchUserDetails,createpost }) {
  const [postName, setPostName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [youtube, setYoutubeLink] = useState("");
  const [github, setGithubLink] = useState("");
  const [topics,setTopics] = useState("");
  const [location,setLocation] = useState("");
  const [college,setCollege] = useState("");
  const [version,setVersion] = useState([0]);

  const [versionData,setVersionData]=useState([{'versionName':"","versionDetails":""}]);
  

  
  const render_version = version.map((show, index) => {
    return (
        <div  key={index} className="version">
        <p>VersionName: </p>
        <input type="text"  
          onChange={(e) => {
              console.log(e);
            versionData[index].versionName=e.target.value;
            setVersionData(versionData);
            }
          }/>
         <p>Version features : </p>
          <textarea type="text"  
          onChange={(e) => {
            versionData[index].versionDetails=e.target.value;
            setVersionData(versionData);
            }
          }/>
        </div>
    );
  });

  
  
  
  
 


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                setPostModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Add an post</h1>
        </div>
        <div className="body">
          <div className="formElement">
              <p>Name : </p>
              <input type="text" value={postName}
          onChange={(e) => setPostName(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Description : </p>
              <textarea type="text" value={description}
          onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Image Link : </p>
              <input type="text" value={image}
          onChange={(e) => setImage(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Youtube Link : </p>
              <input type="text" value={youtube}
          onChange={(e) => setYoutubeLink(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Github Link : </p>
              <input type="text" value={github}
          onChange={(e) => setGithubLink(e.target.value)}/>
          </div>
          <div className="formElement">
              <p>Topics(give spaces b/w topics) : </p>
              <input type="text" value={topics}
              onChange={(e) => setTopics(e.target.value)}/>
          </div>

          <div className="version">
              <button onClick={() => { 
             const newArray= [...version, 0];
             const newVersionArray= [...versionData, {'versionName':"","versionDetails":""}];

            setVersion(newArray);
            setVersionData(newVersionArray);
        }}>Add version</button>
             {render_version}
          </div>

          

        </div>
        <div className="footer">
          <button
            onClick={() => {
                setPostModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> 
          <button   onClick={() => {


           console.log("inside on click");
           console.log(accessToken);
           console.log(idToken);

            createpost(userData.username+userData.posts.length,postName,userData.username,userData.profileUrl,
                description,image,youtube,github,userData.college,userData.location,topics,'0',[],versionData,userData,accessToken,idToken
                
                );

                setPostModalOpen(false);
            
           }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);