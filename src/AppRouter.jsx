import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import Subscriber from './pages/Subscriber';
import Wedding from './Pages/SubLinks/Wedding/wedding';
import Estate from './Pages/SubLinks/Estate/estate';
import Fashion from './Pages/SubLinks/Fashion/fashion';
import Wildlife from './Pages/SubLinks/Wildlife/wildlife';
import Architecture from './Pages/SubLinks/Architecture/architecture';

function AppRouter() {
    return (
        <Router>
            <div>
                <Header />
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/subscribe" element={<Subscriber />} />
                    <Route path="/wedding" element={<Wedding />}></Route>
                    <Route path="/estate" element={<Estate/>}></Route>
                    <Route path="/fashion" element={<Fashion/>}></Route>
                    <Route path="/wildlife" element={<Wildlife/>}></Route>
                    <Route path="/architecture" element={<Architecture />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
