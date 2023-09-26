import React from "react";
import "./CSS_TARJETAS_JUEGOS/style_tarjetaInicial.css";

const TarjetaJuegoInicial = ({source}) =>
{
    return(
        <img src={source} className="imgJuegoInicial"></img>
    );
};

export default TarjetaJuegoInicial;