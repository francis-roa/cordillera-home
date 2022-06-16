import React from 'react';
import marco from '../recursos/marcos/marcodemontanas.png'
function Artistas(){
    return(
        <div id='principalAr'>
            <section id='artistas'></section>
            <h1>Artistas</h1>
            <div className='principalAr'>
                <div className='iym'>
                    <img src={marco} alt='' className='marco' />
                </div>

                <ul>
                    <li>c</li>
                    <li>co</li>
                    <li>cos</li>
                    <li>cosi</li>
                    <li>cosit</li>
                    <li>cosita</li>
                    <li>cositas</li>
                    <li>cositas varias</li>
                </ul>
            </div>
            
            
        </div>
    );
}

export default Artistas;