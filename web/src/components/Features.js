import React from "react";
import "../css/features.css";
import Maiimg from "../imgs/features-1.png";
import Simg from "../imgs/features-2.png";
import Timg from "../imgs/features-3.png"
import Fimg from "../imgs/features-4.png"

export function Features() {
    return (
        <div id="features">
            <div id="featurestitle">
                <h1>Features</h1>
                <div class="smallbox"></div>
            </div>
            <div id="textdown">
                <p id="downtext">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                    Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div id="maincontent">
                <div id="imgmaincon">
                    <img id="imgcont" src={Maiimg} />
                </div>
                <div id="rightsideofcon">
                    <h1 id="titlright">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                    <div>
                        <p id="textaboute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="rowsofside">
                            <span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <span> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            <span> Ullam est qui quos consequatur eos accusamus.</span>
                        </div>
                    </div>
                </div>

            </div>

            <div id="maincontent2">
                <div id="rightsideofcon2">
                    <h1 id="titlright">Corporis temporibus maiores provident.   </h1>
                    <div>
                        <p id="textaboute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="rowsofside">
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
                <div id="imgmaincon2">
                    <img id="imgcont" src={Simg} />
                </div>
            </div>

            <div id="maincontent3">
                <div id="imgmaincon">
                    <img id="imgcont" src={Timg} />
                </div>
                <div id="rightsideofcon">
                    <h1 id="titlright">Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h1>
                    <div>
                        <p id="textaboute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="rowsofside">
                            <span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            <span> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            <span> Ullam est qui quos consequatur eos accusamus.</span>
                        </div>
                    </div>
                </div>

            </div>

            <div id="maincontent4">
                <div id="rightsideofcon2">
                    <h1 id="titlright">Corporis temporibus maiores provident.   </h1>
                    <div>
                        <p id="textaboute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="rowsofside">
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
                <div id="imgmaincon2">
                    <img id="imgcont" src={Fimg} />
                </div>
            </div>
        </div>
    )
}
