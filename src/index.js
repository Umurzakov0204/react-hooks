import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Props from "./components/Props/Props";
import Effects from "./components/Hooks/Effect/Effects";
import State from "./components/Hooks/State/State";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="props" element={<Props/>}>
                    <Route path="effects" element={<Effects/>}/>
                    <Route path="state" element={<State/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
