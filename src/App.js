import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import $ from 'jquery';

import './App.css';

import Layout from './Components/Layout.jsx';

import Template from './pages/Template/Template.jsx';
import Main from './pages/Main/Main.jsx';

const App = () => {
    React.useEffect(() => {
        $(".tab").on("click", function(){
            $(this).siblings(".tab").removeClass("active");
            $(this).addClass("active");
            $(this).parent(".tab__index").siblings(".tab__value").removeClass("active");
            $(this).parent(".tab__index").siblings(".tab__value[data-tab="+$(this).attr("data-tab")+"]").addClass("active");
        });
    }, []); //Перенести в компонент

    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="/template" element={<Template />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}

export default App;