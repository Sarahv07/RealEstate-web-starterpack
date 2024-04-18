import React from 'react';
import "./Hero.css"
const Hero = () => {
    return (
    <section className="hero-wrapper">
        <div className='paddings innerWidth flexCenter hero-container'>
            {/*left side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Your story deserves <br/>a great frame.</h1>
                </div>

                <div className="flexColStart hero-des">
                    <div className="orange-circle2"/>
                    <span>Let us craft timeless images that bring your story to life.</span>
                    <span>Explore our portfolio and discover how we can help you <br/>preserve your most cherished memories.</span>
                    <div className="orange-circle3"/>
                </div>   
            </div>
            
            {/*right side*/}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./main-image.png" alt="main" />
                </div>

            </div>
        </div>

    </section>
);
}

export default Hero;
