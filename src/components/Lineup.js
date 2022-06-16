import React from 'react';
import lineupdesktop from '../recursos/lineup/lineupdesktop.png';
import lineupmovil from '../recursos/lineup/lineupmovil.png';

function Lineup(){
    return(
        <div className='ps'>
            <div className='principall'>
                <h1>LineUp</h1>
                <img src={lineupmovil} alt='' id='movil'/>
                <img src={lineupdesktop} alt='' id='desktop'/>
                <h4>PARQUE SIMÓN BOLIVAR. 24 Y 25 DE SEPTIEMBRE</h4>
            </div>
        </div>
        
    );
}

export default Lineup;