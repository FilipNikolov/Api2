import React from "react";
import "../css/navbar.css";
import { GetStared } from "./GetStarted";
export function Navbar() {
    return (
        <div className="navbar">
            <div id="leftside">

            </div>
            <div id="rightside">
                <div className="buttons">
                    <button id="home">Home</button>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="about">About</button>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="services">Services</button>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="portfolio">Portfolio</button>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="team">Team</button>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="pricing">Pricing</button>
                </div>
                <div className="dropdown">
                    <div id="dropbox">
                        <span>Dropdown</span>
                        <div id="box">
                            <div class="dropdown-content">
                                <p>Downmenu</p>
                                <p>Downmenu</p>
                                <p>Downmenu</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button classname="navbuttons" id="contant">Contact</button>
                </div>
                <div className="getstarted">
                    <div id="getstarted"><a href={GetStared}></a></div>
                </div>
            </div>
        </div >
    )

}

export default Navbar;
