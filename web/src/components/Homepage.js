import React from "react";
import Navbar from "./Navbar";
import "../css/homepage.css";
import Img from "../imgs/mainimg.png";
import { GetStared } from "./GetStarted";
import { Features } from "./Features";
import { Table } from "./Table";
import { Services } from "./Services";

export function HomePage() {
    return (
        <div class="homepage">
            <Navbar />
            <div className="main-div">

                <div id="main-title">
                    <h1 class="text">Build Better Websites With Bikin</h1>
                    <p class="textabove">We are team of talented designers making websites with Bootstrap</p>
                    <div id="button-get"> <a href="">Get Started</a></div>
                    <img class="mainimg" src={Img} />
                </div>
            </div>
            <GetStared />
            <Features />
            <Table />
            <Services />
        </div>
    );
}
export default HomePage;