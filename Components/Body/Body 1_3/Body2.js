import React from "react";
import "./CSS_BODY1_3/style_body2.css";
import logoFIFA22 from "../../Images/logoFIFA22.png";
import mbappeFIFA22 from "../../Images/mbappeFIFA22.png";

const Body2 = function()
{
    return(
        <div className="divBody2">
            <div className="panelImagenLogoFIFA22">
                <img src={logoFIFA22} className="LogoFIFA22"></img>
            </div>
            <div className="panelImagenMbappe">
                <img src={mbappeFIFA22} className="mbappe"></img>
            </div>
        </div>
    );
}

export default Body2;