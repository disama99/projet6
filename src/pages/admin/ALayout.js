import React from 'react';
import { Outlet } from 'react-router-dom';

import "./admin.css"

import Header from '@/components/Admin/Header'
import SideMenu from '@/components/Admin/SideMenu'

const ALayout = () => {
    return (
        <div className='ALayout'>
            <Header/>
            <div id="Admin">
                 <SideMenu/>
                 <div id="Admin_body"><Outlet/></div>            
            </div>        
        </div>
    );
};

export default ALayout;