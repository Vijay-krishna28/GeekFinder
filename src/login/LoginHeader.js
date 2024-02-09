import './LoginHeader.css';
import { useNavigate } from "react-router-dom";
 

function LoginHeader()
{
  let navigate = useNavigate();

  return(
    <div className="mainHeader">
      
      <div className='placeholderDiv'></div>
       <div className="iconDiv">
          <img className="icon" src="https://t3.ftcdn.net/jpg/03/54/95/66/360_F_354956609_tuIKYmk13UP2yNaJ4NGcsj8uTsZ4cojL.jpg" />
          <p>Geek finder</p>
       </div>

       <div className="loginButtonPart">
         <button className='recriuterloginButton' ><a href="https://geekfinder.auth.us-east-1.amazoncognito.com/login?client_id=2kcq3go6f405oks13u5eafumer&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/home">Recruiters login</a></button>
        <button className='studentloginButton'  ><a href="https://geekfinder.auth.us-east-1.amazoncognito.com/login?client_id=2kcq3go6f405oks13u5eafumer&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/home">student login</a></button>

       </div>

    </div>


  );


}

export default LoginHeader;