import React from "react";
import "../css/features.css";
import Maiimg from "../imgs/features-1.png";

function Features() {
    return (
        <div id="features">
            <div id="featurestitle">
                <h1>Features</h1>
                <div id="smallbox"></div>
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
        </div>
    )
}
export default Features;