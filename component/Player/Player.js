import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import './Player.css'

const Player = (props) => {
    const {images, name, salary}=props.player
    return (
        <div className='two-part'>
            <div className='customize'>
                 <img src={images} alt=""/>   
                 </div>
                <h5> Player Name: {name}</h5>
                <h5> Salary: $ {salary}</h5>
                <button className='main-button' onClick={()=>props.selectPlayer(props.player)}>Hired Him  <FontAwesomeIcon icon={faUserPlus} />  </button>
        
        </div>
    );
};

export default Player;