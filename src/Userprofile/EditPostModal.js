import React,{ useState }  from "react";
import fetchUserDetailsResults, { editUserDetailsResults } from "../redux/UserGetDetailsActionCreators ";

import "./EditPostModal.css";

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



function EditPostModal({ setOpenModal,post,accessToken,idToken,userData,createpost}) {

  console.log(post);

  const [postName, setPostName] = useState(post.Name);
  const [id, setId] = useState(post.postid);
  const [description, setDescription] = useState(post.description);
  const [image, setImage] = useState(post.image);
  const [youtube, setYoutubeLink] = useState(post.youtubeLink);
  const [github, setGithubLink] = useState(post.githubLink);
  const [topics,setTopics] = useState(post.topics);
  const [location,setLocation] = useState(post.locations);
  const [college,setCollege] = useState(post.college);
  const [version,setVersion] = useState([0]);

  const [versionData,setVersionData]=useState(post.versions);
  

  
  const render_version = versionData.map((show, index) => {
    return (
        <div  key={index} className="Editversion">
        <p>VersionName: </p>
        <input type="text" 
         key={index} 
         
          onChange={(e) => {
            versionData[index].versionName=e.target.value;
            setVersionData(versionData);
          

            }
          }/>
         <p>Version features : </p>
          <textarea 
          key={index}
          
          type="text"  
          onChange={(e) => {
            
            
            versionData[index].versionDetails=e.target.value;
            setVersionData(versionData);
            
            }
          }/>
        </div>
    );
  });

  
  
  
  
 


  return (
    <div className="EditmodalBackground">
      <div className="EditmodalContainer">
        <div className="EdittitleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="Edittitle">
          <h1>Edit the above  post</h1>
        </div>
        <div className="Editbody">
          <div className="EditformElement">
              <p>Name : </p>
              <input type="text" value={postName}
          onChange={(e) => setPostName(e.target.value)}/>
          </div>
          <div className="EditformElement">
              <p>Description : </p>
              <textarea type="text" value={description}
          onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="EditformElement">
              <p>Image Link : </p>
              <input type="text" value={image}
          onChange={(e) => setImage(e.target.value)}/>
          </div>
          <div className="EditformElement">
              <p>Youtube Link : </p>
              <input type="text" value={youtube}
          onChange={(e) => setYoutubeLink(e.target.value)}/>
          </div>
          <div className="EditformElement">
              <p>Github Link : </p>
              <input type="text" value={github}
          onChange={(e) => setGithubLink(e.target.value)}/>
          </div>
          <div className="EditformElement">
              <p>Topics(give spaces b/w topics) : </p>
              <input type="text" value={topics}
              onChange={(e) => setTopics(e.target.value)}/>
          </div>

          <div className="Editversion">
              <button onClick={() => { 
             const newArray= [...version, 0];
             const newVersionArray= [...versionData, {'versionName':"","versionDetails":""}];

            setVersion(newArray);
            setVersionData(newVersionArray);
        }}>Add version</button>
             {render_version}
          </div>

          

        </div>
        <div className="Editfooter">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="EditcancelBtn"
          >
            Cancel
          </button> 
          <button   onClick={() => {

            createpost(post.postid,postName,post.username,post.userProfilePic,
                description,image,youtube,github,post.college,post.locations,topics,post.likes,post.comments,versionData,userData,accessToken,idToken
                
                );

                setOpenModal(false);
            
           }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostModal);