import React from "react";
import "./style_tarjetaContenido.css";

const TarjetaContenido = ({source}) =>
{
    return(
        <img src={source} className="imgContenido"></img>
    );
};

export default TarjetaContenido;