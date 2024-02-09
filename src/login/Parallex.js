import InfoCard from './InfoCard';
import './Parallex.css';

function Parallex(props)
{

  return(
    <div>
    <div className="parallax" style={{backgroundImage: `url(${props.data[2]})`}}>
   
    </div>

    <div className="text">
     <InfoCard data={props.data}/>
    </div>
    </div>


  );


}

export default Parallex;