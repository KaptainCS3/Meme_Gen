import React from 'react'
import image from '../images/avatar.png'
import troll from '../images/Troll Face.png'


function Star(props) {
    console.log(props)
  return (
    <div>
      <img src={props.isFilled ? `${image}` : `${troll}`} alt="" className="small" onClick={props.handleClick}/>
    </div>
  );
}

export default Star