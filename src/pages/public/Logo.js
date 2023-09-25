import React from 'react';
import logo from "./logokasa/LOGO.png"                      

import "./logo.scss"

const Logo = () => {
    return (
        <div className='Logo'>
            <img src={logo} alt='logo'/>
        </div>
    );
};

export default Logo;