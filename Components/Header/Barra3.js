import React from "react";
import "./CSS_HEADER/style_barra3.css";
import ImgLogoPlayStore from "../Images/logoPlayStore.png";
const Barra3 = function()
{
    return(
        <div className="divBarra3">
            <div className="divIzquierdoB3">
                <img src={ImgLogoPlayStore} className="logoPlayStore"></img>
            </div>
            <div className="divDerechoB3">
                <a className="botonMenu1">Más reciente</a>
                <a className="botonMenu">Colecciones</a>
                <a className="botonMenu">Ofertas</a>
                <a className="botonMenu">PS5</a>
                <a className="botonMenu">Suscripciones</a>
                <a className="botonMenu">Explorar</a>
            </div>
            <div className="divInvisible">
                
            </div>
        </div>
    );
}

export default Barra3;