import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="contact" />
                    </div>
                </div>
                <div>
                    <span className='orangeText'>Let's Talk Photography</span><br/>
                    <span className='primaryText'>So what's in store for YOU...</span><br/><br/>
                    <ul class="benefits-list">
                        <li>Captivating visuals that go beyond snapshots, evoking emotions.</li>
                        <li>We freeze time in beautiful frames, preserving life's precious moments. </li>
                        <li>Experience you can trust for lasting memories.</li>
                    </ul>
                </div>
                {/*left side*/}
                <div className="c-right">
                    <span className='orangeText'>Wanna Contact Us?</span><br/>
                    <span className='primaryText'>Here you go...</span>
                    <div className="flexColStart contactModes">
                        {/*first row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail" >
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>080 24356070</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/*second mode*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail" >
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>+91 6362636255</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>

                        {/*second row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail" >
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>+91 8861240331</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">VideoCall Now</div>
                            </div>

                            {/*fourth mode*/}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail" >
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>+91 6362333577</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>
    );
}

export default Contact;
