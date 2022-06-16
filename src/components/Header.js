import React from 'react';
import imagen1 from "../recursos/banner/1.png"
import imagen2 from "../recursos/banner/2 .png"
import imagen3 from "../recursos/banner/3.png"
import imagen4 from "../recursos/banner/4.png"
import imagen5 from "../recursos/banner/5.png"
import imagen6 from "../recursos/banner/6 .png"
import imagen7 from "../recursos/logos/logocordillerasvg.svg"
function Header(){
    return(
        <div className='principal'>
            <img src={imagen1} id='condor' alt=' '/>
            <img src={imagen2} id='sol' alt=' '/>
            <img src={imagen3} id='halo' alt=' '/>
            <img src={imagen4} id='calor' alt=' '/>
            <img src={imagen5} id='halo2' alt=' '/>
            <img src={imagen6} id='monte' alt=' '/>
            <img src={imagen7} id='logo' alt=' '/>
            <div className='scrollBtt'>
                <a href='#artistas'>Artistas</a>
                <a href='#entradas'>Entradas</a>
            </div>
        </div>
    );
}

export default Header;