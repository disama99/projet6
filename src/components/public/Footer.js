import React from 'react';

import './footer.scss'
import LogoF from '@/pages/public/LogoF';

const Footer = () => {
    return (
        <footer >
            <div className='rightscopy'>
            <LogoF/>
            <p><span className="copyright">© 2020 Kasa. All </span>rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;