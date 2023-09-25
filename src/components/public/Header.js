import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '@/pages/public/Logo';


const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('accueil'); // élément actif par défaut

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className={`pheader ${isMobile ? 'mobile-header' : 'desktop-header'}`}>
            
            <Logo/>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/home"
                                onClick={() => handleLinkClick('accueil')}
                                className={activeLink === 'accueil' ? 'active-link' : ''}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/apropos"
                                onClick={() => handleLinkClick('apropos')}
                                className={activeLink === 'apropos' ? 'active-link' : ''}
                            >
                                A propos
                            </Link>
                        </li>
                    </ul>
                </nav>
        
        </header>
    );
};

export default Header;
