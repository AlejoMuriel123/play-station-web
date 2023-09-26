import React from "react";
import "./CSS_BODY7_9/style_body7.css";
import TarjetaContenido from "./tarjetasContenido/TarjetaContenido";
import imagenTarjetaC1 from "../../Images/tarjetasContenido/ps5.jpg";
import imagenTarjetaC2 from "../../Images/tarjetasContenido/ps4.jpg";
import imagenTarjetaC3 from "../../Images/tarjetasContenido/descuentos.jpg";
import imagenTarjetaC4 from "../../Images/tarjetasContenido/complementos.jpg";
import imagenTarjetaC5 from "../../Images/tarjetasContenido/gratuitos.jpg";
import imagenTarjetaC6 from "../../Images/tarjetasContenido/vr.jpg";
import imagenTarjetaC7 from "../../Images/tarjetasContenido/plus.jpg";

const Body7 = function()
{
    return(
        <div className="divBody7">
            <div className="textoInicial">
                <p className="textVerMas">Ver más</p>
            </div>
            <div className="contenido">
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC1}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC2}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC3}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC4}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC5}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC6}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaContenido source={imagenTarjetaC7}/></a>
            </div>
        </div>
    );
}

export default Body7;