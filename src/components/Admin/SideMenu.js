import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/User/index">Liste</Link></li>
                        <li><Link to="/admin/User/UserAdd">Ajouter</Link></li>
                    </ul>
                </li>
                <li>
                    Kasa
                    <ul>
                        <li><Link to="/admin/Kasa/index">Liste</Link></li>
                        <li><Link to="/admin/Kasa/KasaEdit">Ajouter</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;