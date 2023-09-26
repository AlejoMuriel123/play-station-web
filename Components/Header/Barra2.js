import React from "react";
import "./CSS_HEADER/style_barra2.css";
import "./CSS_HEADER/styleIconMoon.css";
import "./CSS_HEADER/style_search.css";
import ImgLogoPlay from "../Images/logoPlay.png";

const Barra2 = function()
{
    return(
        <div className="divBarra2">
            <div className="divMenuIzquierdo">
                <img src={ImgLogoPlay} className="logoPlay"></img>
                <a className="enlaceV">Juegos <span class="icon-circle-down"></span></a>
                <a className="enlaceV">Hardware<span class="icon-circle-down"></span></a>
                <a className="enlaceV">Servicios<span class="icon-circle-down"></span></a>
                <a className="enlaceV">Noticias<span class="icon-circle-down"></span></a>
                <a className="enlaceV">Tiendas<span class="icon-circle-down"></span></a>
                <a className="enlaceV">Asistencia<span class="icon-circle-down"></span></a>
            </div>
            <div className="divMenuDerecho">
                <a className="botonIniciarSesion">Iniciar sesión</a>
                <a className="botonBuscar"><span class="icon-search"></span></a>
            </div>
        </div>
    );
}

export default Barra2;