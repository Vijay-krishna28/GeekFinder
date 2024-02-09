import './Loginbody.css';
import Parallex from './Parallex';
//import { Parallax, ParallaxLayer } from '@react-spring/Parallax';
/*

 <InfoCard data={data1}/>;
      <InfoCard data={data2}/>;
      <InfoCard data={data3}/>;
    

*/

function Loginbody()
{
  const data1 = ["FIND LIKEMINDED STUDENTS","Geekfinder gives you an opportunity to find likeminded students near you ","https://www.howtogeek.com/wp-content/uploads/2021/07/How-to-Make-Windows-Terminal-Your-Default-Terminal.png?width=1024&trim=1,1&bg-color=000&pad=1,1"];
 
  const data2 = ["FOLLOW PROJECTS AND POSTS","You can follow posts and search people,projects and also filter students based on their location and it also has message communication as well","https://arhsharbinger.com/wp-content/uploads/2019/06/group-projects-e1560807217598-900x574.jpg"];

  
  const data3 = ["Heaven for recruiters","recruiters can come in and filter projects done by students and select student easily with confidence that this student can code","https://middlemarketgrowth.org/wp-content/uploads/2021/06/virtual-interview-work-from-home.jpg"];


  return(
  


    <div className="mainBody">
      <Parallex  data={data1} />
      <Parallex  data={data2}/>
      <Parallex  data={data3}/>
      

    </div>

   

  );



}

export default Loginbody;