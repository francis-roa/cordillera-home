import React from 'react';
function Entradas() {
    return (
        <div className='cuerpo'>
            <section id='entradas'></section>
            <h1>Entradas</h1>
            <h3>COMBOS(2 DÍAS)</h3>
            <div className='cuerpo2'>
                <div>
                    <h2>General</h2>
                    <div className='entGeneral'>
                        <ul className='etapa'>
                            <li>ETAPA 1</li>
                            <li>ETAPA 2</li>
                            <li>ETAPA 3</li>
                        </ul>
                        <ul className='estatus'>
                            <li>Agotado</li>
                            <li>Agotado</li>
                            <li>$509,000 + servicio</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>VIP</h2>
                    <div className='entVIP'>
                        <ul className='etapa'>
                            <li>ETAPA 1</li>
                            <li>ETAPA 2</li>
                            <li>ETAPA 3</li>
                        </ul>
                        <ul className='estatus'>
                            <li>Agotado</li>
                            <li>Agotado</li>
                            <li>$509,000 + servicio</li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Entradas;