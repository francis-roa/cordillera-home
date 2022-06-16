import React from 'react';
import im1Manifiesto from '../recursos/manifesto/fotomanifesto1.jpg'
import im2Manifiesto from '../recursos/manifesto/fotomanifesto2.jpg'
import fondoMa from '../recursos/manifesto/fondo_manifiesto.png'
import fondoMa2 from '../recursos/manifesto/fondo_cordillera_florecera.png'

function Manifiesto(){
    return(
        <div className='principalMa'>
            <img src={fondoMa} alt='' className='fondoMa'/>
            <div className='manif'>
                <div className='manifiesto'>
                    <h1>Manifiesto</h1>
                    <p>
                        SELVÁTICOS. MÍSTICOS. POLÍTICOS.
                        ECOLÓGICOS. Y EN ESPAÑOL. ASÍ SOMOS.
                        ASÍ ES ESTA CORDILLERA DE SONIDOS, 
                        PREGONES Y NATURALEZA VIVA.
                    </p>
                </div>
                <div className='imagenesM'>
                    <img src={im1Manifiesto} alt=''/>
                    <img src={im2Manifiesto} alt=''/>
                </div>
            </div>
            <img src={fondoMa2} alt='' className='fondoMa2'/>
            <div className='ftManifiesto'>
                <h1>La Cordillera FLORECERÁ</h1>
                <p>
                    Las montañas son nuestra esecia y por eso 
                    con cada transacción de boletría en Cordillera
                    sembraremos Lupinus, Frailejones, y Guayacanes
                    en el Páramo de las Cuchillas. Allí donde nace
                    el río Bogotá y en donde la vida empieza a 
                    tomar forma
                </p>
                <h3>
                    La Cordillera, la música y la lengua nos unen. 
                    Gracias a ti la vída continúa.
                </h3>
            </div>
        </div>
    );
}

export default Manifiesto