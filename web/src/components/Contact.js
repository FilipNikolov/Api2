import React from "react";
import "../css/contact.css";

export function Contact() {
    return (
        <div id="contact">
            <div id="contacttitlebox">
                <h1>Contact</h1>
                <div id="smallboxcontact"></div>
            </div>
            <div id="textdowncontact">
                <p id="downtextcontact">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                    Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div id="mainboxcontact">
                <div id="leftside">
                    <div id="adress">
                    </div>
                    <div id="secondrow">
                        <div class="emailocontact"></div>
                        <div class="emailocontact"></div>
                    </div>
                </div>
                <div id="rightsidecontact">

                    <div id="inputorow1">
                        <input type="text" class="contactinput" placeholder="Your name"></input>
                        <input type="text" class="contactinput" placeholder="Your Email"></input>
                    </div>
                    <div id="inputrow2">
                        <input type="text" class="contactsubject" placeholder="Subject"></input>
                    </div>
                    <div id="thirthrow">
                        <textarea placeholder="Message"></textarea>
                        <div id="submitbutton"><a id="submitlink" href="" >Send Message</a></div>
                    </div>

                </div>
            </div>
        </div >
    )
}
