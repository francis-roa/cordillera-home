import React from 'react';

function Footer(){
    return(
        <div className='footer'>
            <div className='footermenu1'>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <ul>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                </ul>
            </div>
            
            <ul className='footermenu2'>
                <li>10</li>
                <li><a href='/politicas-paramo.pdf' download>POLÍTICA DE PRIVACIDAD</a></li>
                <li><a href='mailto:INFO@PARAMOPRESENTA.COM Subject=Quiero%20saber%más'>INFORMACIÓN Y PQR'S</a></li>
            </ul>

        </div>
    )
}

export default Footer