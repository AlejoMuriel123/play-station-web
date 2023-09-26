import React from "react";
import "./CSS_BODY5_6/style_body5_6.css";
import ImgPlus from "../../Images/psplus.png";
import imgMK from "../../Images/MK.png";

const Body5_6 = function()
{
    return(
        <div className="divBody5_6">
            <div className="pIzquierdo5_6">
                <img src={ImgPlus} className="imgPsPlus"></img>
            </div>
            <div className="pDerecho5_6">
                <img src={imgMK} className="imgMK"></img>
            </div>
        </div>
    );
}

export default Body5_6;