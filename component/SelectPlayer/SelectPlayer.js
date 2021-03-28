import React from 'react';
import './SelectPlayer.css'
const SelectPlayer = (props) => { 
    const select= props.select
    let total=0;
    for (let i = 0; i < select.length; i++) {
        const player = select[i];
        total=total + player.salary
        
    }

    return (
        <div className='select-player'>
            <p>Player Selected : {select.length} </p>
            {
                select.map((players=><p className='player'>{players.name} - $ {players.salary}</p>))
            }
            <p class='added-for-border'>Total Cost: <span> $ {total} </span></p>
           

        </div>
    );
};

export default SelectPlayer;