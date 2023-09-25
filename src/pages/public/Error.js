import React from 'react';

import './error.scss'

const Error = () => {
    return (
        <div className='Error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner à la page d'accueil</a>
        </div>
    );
};

export default Error;