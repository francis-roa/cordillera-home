import React from "react";
import icono1 from "../recursos/iconos/hamburguesa.svg"
import icono2 from "../recursos/iconos/x.svg"

function Sidemenu(){
    return(
        <div>
            <input type='checkbox' id='btn' />
            <div className='icono1'>
                <label htmlFor='btn'>
                    <img src={icono1} alt=' ' />
                </label>
            </div>
            <div className='icono2'>
                <label htmlFor='btn'>
                    <img src={icono2} alt=' ' />
                </label>
            </div>
            <div className="smenu">
                <div id="izquierda">
                    <ul>
                        <li>HOME</li>
                        <li>ARTISTAS</li>
                        <li>ENTRADAS</li>
                        <li>EL FESTIVAL</li>
                        <li>FAQS</li>
                    </ul>
                </div>
                <div id="derecha">
                    <ul>
                        <li>Como llegar</li>
                        <li>Horarios</li>
                        <li>Cashless</li>
                        <li>Cordillera Siembra</li>
                        <li>Agenda Académica</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Sidemenu;