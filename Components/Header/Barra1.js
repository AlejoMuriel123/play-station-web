import React from "react";
import "./CSS_HEADER/style_barra1.css";
import Image from "../Images/logoSony.png";

const Barra1 = function()
{
    return(
        <div className="divBarra1">
            <img src={Image} className="LogoSony"></img>
        </div>
    );
}

export default Barra1;