// src/components/Bot.js
import React, { useState } from 'react';
import key from "../assets/key.png";
import "../styles/bot.css";
import dot from "../assets/dot.png";
import ext from "../assets/ext.svg";
import js from "../assets/js.png";
import lap from "../assets/lap.svg";
import dev from "../assets/dev.png";
import Vector from "../assets/Vector.svg";
import Discord from "../assets/Discord.png";
import am from "../assets/logo.svg";
import soon from "../assets/soon.png";
import horzline from "../assets/horzline.svg";
import Ellipse from "../assets/Ellipse.svg";
import social from "../assets/social.svg";
import Polygon from "../assets/Polygon.svg";
import discordnew from "../assets/Discord New.png";
import overlay from "../assets/overlay.png";
import { Link } from 'react-router-dom';

const Bot = () => {
    const [showCodeEditor, setShowCodeEditor] = useState(false);

    // Toggle the CodeEditor display
    const handleCodeEditorClick = () => {
        setShowCodeEditor(true);
    };

    return (
        <div className="bot-container">
            <div className="dev ">
                <div className="left">
                    <p>
                        Your go-to platform for mastering code is now on your fingertips. With <span>1AMcreators.com</span>, access world-class chatbot both free and premium, designed to elevate your skills, no matter where you are.
                    </p>

                    <Link to="/code-editor">
                        <button>
                            Code Editor <span><img src={discordnew} alt="Discord Icon" /></span>
                        </button>
                    </Link>
                </div>
                <div className="right">
                    <img src={key} alt='Key Image' />
                </div>
            </div>

            <div className="alone">
                <div className="txt ">
                    <p className="small" id="a">Stuck While Coding</p>
                    <p className="b">Why Code Alone</p>
                    <p className="small" id="c">Code, Build, Deploy</p>
                </div>
                <div className="temp fade-in">
                    <img className='dot' src={dot} alt='dot' />
                </div>
                <div className="exp ">
                    <p className="exe">Explore the <span>1AM</span> way</p>
                    <img src={ext} alt='line' />
                    <p id="le"><span>Learn</span></p>
                    <p id="in">Instantly and interactively</p>
                    <p id="out">Learn from carefully curated learning paths with up-to-date interactive courses, and receive 24x7 AI assistance as you develop your coding skills.</p>
                </div>
                <div className="js ">
                    <img src={js} alt='jsx' />
                    <div className="hands">
                        <img src={lap} alt='Laptop' />
                        <p id="han">Hands-on Practice</p>
                        <p id='at'>At 1AM, you get to learn by doing. Escape tutorial hell by solving real-world challenges in our interactive labs, all within your browser.</p>
                    </div>
                </div>
                <div className="cod ">
                    <p className="off">Code, Build, Deploy</p>
                    <img src={ext} alt='line' />
                    <p id="of"><span>Grow</span></p>
                    <p id="on">Expand your potential</p>
                </div>
                <div className="do ">
                    <img src={dev} alt='Developer Image' />
                    <img src={overlay} alt='Overlay' className="overlay-image" />
                </div>
                <div className="da ">
                    <p className="jo">Join the community of developers changing the world</p>
                    <p id="joo">Transform the way you learn coding and connect with other like-minded developers across the globe.</p>
                    <img src={Vector} alt='Vector Image' />
                    <p className="ro">Make Something Great</p>
                    <p id="roo">Start a playground, invite your friends, and build your projects collaboratively, from anywhere around the globe.</p>
                    <img src={Discord} alt='Discord' />
                    <p className="bo">Connect on Discord</p>
                    <p id="boo">Find developers, mentors, and new friends. Attend exclusive events organized by 1AM and have fun while growing your skills.</p>
                </div>

                <div className="all ">
                    <button>Start Your Coding Journey</button>
                    <p className="ce">Code, Build, Deploy</p>
                    <img src={am} alt='Logo' />
                    <img src={soon} alt='Coming Soon' />
                </div>

                <div className="footer ">
                    <div className="hr">
                        <img src={horzline} alt='Horizontal Line' />
                    </div>

                    <div className="foot">
                        {/* <img src={horzline} alt='Horizontal Line' /> */}
                        <p className="foo">Got a project? Want to collaborate?</p>
                        {/* <p className="fin">Discuss your project <span><img src={Polygon} alt='Polygon' /></span></p> */}

                        {/* <img src={Ellipse} alt='Ellipse' /> */}

                        {/* <p id="fan">© Copyright 2024. 1AM. All rights reserved.</p> */}
                        {/* <p className="fe">Terms & Conditions</p> */}
                        {/* <img src={social} alt='Social Icons' /> */}
                        {/* <p className="few">Let’s work together</p> */}
                    </div>
                    <div className="foots">
                        <p className="fly">Contact</p>
                        {/* <p className="fin">Discuss your project <span><img src={Polygon} alt='Polygon' /></span></p> */}
                        <p id="count">Hyderabad, India</p>


                        {/* <p className="flo"><a href="mailto:maaz.codes1@gmail.com">maaz.codes1@gmail.com</a></p>
                        <p className="fap"><a href="mailto:faizafatima742@gmail.com">faizafatima742@gmail.com</a></p>
                        <p className="fp"><a href="mailto:sameerabegum324@gmail.com">sameerabegum324@gmail.com</a></p> */}
                    </div>
                    <div className="fot">
                        <p className="flo"><a href="mailto:maaz.codes1@gmail.com">maaz.codes1@gmail.com</a></p>
                        <p className="fap"><a href="mailto:faizafatima742@gmail.com">faizafatima742@gmail.com</a></p>
                        <p className="fp"><a href="mailto:sameerabegum324@gmail.com">sameerabegum324@gmail.com</a></p>
                    </div>
                    <div className="fonts">
                        <img id='ele' src={Ellipse} alt='Ellipse' />
                        <div className="work">
                            <div className="top">
                                <p id="fan">© Copyright 2024. 1AM. All rights reserved.</p>
                                <p className="fe">Terms & Conditions</p>
                                <img id="ico" src={social} alt='Social Icons' />
                            </div>
                            <p className="few">Let’s work together</p>
                        </div>

                    </div>
                    {/* <div className="work"> */}
                    {/* <div className="top">
                            <p id="fan">© Copyright 2024. 1AM. All rights reserved.</p>
                            <p className="fe">Terms & Conditions</p>
                            <img id="ico" src={social} alt='Social Icons' />
                        </div>
                        <p className="few">Let’s work together</p> */}

                    {/* </div> */}

                </div>
            </div>
        </div>
    );
}

export default Bot;