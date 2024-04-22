import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage';
import Gallery from '../pages/Gallery';
import Subscriber from '../pages/Subscriber';

function AppRouter() {
    return (
        <Router>
            <div>
                <Header />
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/subscribe" element={<Subscriber />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
