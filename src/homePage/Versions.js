
import React,  { useState }from 'react';
import './Versions.css';
function Versions(props)
{
    const [clicked, setclicked] = useState(false);
   /*const renderVersionDetails =props.data.versionDetails.map((detail,index)=>{

     return(
        <div className='versionDetail'>
            <p>{detail}</p>

        </div>

     );


   });*/


   return(
       <div className='versionContainer'>
           <button className='versionButton' onClick={() =>  setclicked(!clicked)} >{props.data.versionName}</button>
            {clicked && props.data.versionDetails}

       </div>
   );

}

export default Versions;