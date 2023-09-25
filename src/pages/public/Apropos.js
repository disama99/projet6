import React from 'react';


import Enteteapropos from '@/pages/public/Enteteapropos';
import Menuderoulantapropo from '@/pages/public/Menuderoulantapropo';

import "./apropos.scss"

const Apropos = () => {
    return (
        <div className='Apropos'>
         <Enteteapropos/>  
         <Menuderoulantapropo/> 
        </div>
    );
};

export default Apropos;