import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/hero/Hero';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../App.css';

function HomePage() {
    return (
        <div className="HomePage">
            <div>
                <div className="white-gradient"/>
                    <Header/>
                    <Hero/>
                </div>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default HomePage;
