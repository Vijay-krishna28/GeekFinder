import './Loginbody.css';

function InfoCard(props)
{
    return(
        <div className='InfoCard'>
        
       
        <div className='textPart'>
        <h2>
           {props.data[0]}

        </h2>
        <p>
         {props.data[1]}
        </p>
        </div>

      </div>



    );


}

export default InfoCard;