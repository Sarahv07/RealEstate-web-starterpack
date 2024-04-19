import React from 'react';
import "./Hero.css";
import {motion} from 'framer-motion';
const Hero = () => {
    return (
    <section className="hero-wrapper">
        <div className='paddings innerWidth flexCenter hero-container'>
            {/*left side*/}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y:"2rem", opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}>Your story deserves <br/>a great frame.</motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <div className="orange-circle2"/>
                    <span>Let us craft timeless images that bring your story to life.</span>
                    <span>Explore our portfolio and discover how we can help you <br/>preserve your most cherished memories.</span>
                    <div className="orange-circle3"/>
                </div>   
            </div>
            
            {/*right side*/}
            <motion.div
            initial={{x:"7rem", opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{
                duration:2,
                type:"spring"
            }}
            className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./main-image.png" alt="main" />
                </div>

            </motion.div>
        </div>

    </section>
);
}

export default Hero;
