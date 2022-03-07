import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout.jsx';

import Template from './pages/Template/Template.jsx';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Template />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}

export default App;