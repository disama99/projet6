import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Layout, Home, Apropos, } from '@/pages/public'


import Error from '@/pages/public/Error'
import Infologement from '@/pages/public/Infologement';


const PublicRouter = () => {
    return (
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/logement/:id" element={<Infologement />} />
            <Route path="/apropos" element={<Apropos />} />

            <Route path='*' element={<Error />} />
          </Route>

        </Routes>
    );
};

export default PublicRouter;