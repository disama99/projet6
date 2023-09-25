import React from 'react';
import enteteAccueil from "./logokasa/Fond.png" 

import "./enteteAccueil.scss"

const EnteteAccueil = () => {
    return (
        <div className='EnteteAccueil'>
             <img src={enteteAccueil} alt="photoentete"/>
             <div className="slogan">Chez vous, partout et ailleurs</div>
        </div>
    );
};

export default EnteteAccueil;