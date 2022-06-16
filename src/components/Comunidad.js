import React from "react";
import logosdsk from '../recursos/logos/logos_desktop.png'
import logosmvl from '../recursos/logos/logos_movil.png'
function Comunidad(){
    return(
        <div>
            <div className="txfooter">
                <h1>Comunidad</h1>
                <h3>SUDAMERIAN ROCKERS</h3>
                <p className="comtxt">
                    ¡Bienvenidos y bienvenidas a la Comunidad
                    Sudamerican Rockers!
                    Aquí, charladito, les vamos soltando noticias,
                    anuncios, beneficios jugosos y más. Pasen la voz,
                    el encuentro de sonidos latinos ya está aquí.
                </p>
                <a href='/formulario_registro_cordillera.html' target='_blank' id='suscri'>Suscribete</a>
            </div>
            <div className="logoscont">
                <img src={logosmvl} alt='' className="logos"/>
            </div>
            
        </div>
    );
}

export default Comunidad;