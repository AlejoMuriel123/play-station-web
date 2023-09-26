import React from "react";
import "./CSS_TARJETAS_JUEGOS/style_tarjetaSecundaria.css";

const TarjetaJuegoSecundario = ({source}) =>
{
    return(
        <img src={source} className="imgJuegoSecundario"></img>
    );
};

export default TarjetaJuegoSecundario;