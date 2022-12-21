import React from "react";
import "../css/services.css"

export function Services() {
    return (
        <div id="servicesmainbox">
            <div id="servicesback">
                <div id="servicetitlebox">
                    <h1>Services</h1>
                    <div id="smallboxservices"></div>
                </div>
                <div id="textserviceabove">
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                        Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div id="hoverboxes">
                    <div class="servicebox">
                        <div class="photo"></div>
                        <h1 class="nameofservice">Admin Service</h1>
                        <p class="aboutservice"> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div class="servicebox">
                        <div class="photo"></div>
                        <h1 class="nameofservice">Hardware Service</h1>
                        <p class="aboutservice"> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div class="servicebox">
                        <div class="photo"></div>
                        <h1 class="nameofservice">Web Designer</h1>
                        <p class="aboutservice"> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div class="servicebox">
                        <div class="photo"></div>
                        <h1 class="nameofservice">Development</h1>
                        <p class="aboutservice"> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}