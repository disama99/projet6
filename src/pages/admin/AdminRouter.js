import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { ALayout, Dashboard } from '@/pages/admin'
import { User, UserAdd, UserEdit } from '@/pages/admin/User'
import { Kasa, KasaEdit } from "@/pages/admin/Kasa"

import Error from '@/_utiles/Error'

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='User'>
                    <Route path='index' element={<User/>}/>
                    <Route path='useradd' element={<UserAdd/>}/>
                    <Route path="useredit/:uid" element={<UserEdit/>}/>
                </Route>
                <Route path='Kasa'>
                    <Route path= 'index' element={<Kasa/>}/>
                    <Route path= 'KasaEdit' element={<KasaEdit/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;