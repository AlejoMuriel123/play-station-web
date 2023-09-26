import React from "react";
import "./CSS_BODY7_9/style_body8.css";
import imgPSN from "../../Images/psn.png";
import imgNet from "../../Images/net.png";

const Body8 = function()
{
    return(
        <footer className="footer">
            <div className="inicio">
                <img src={imgPSN} className="imgPlay"></img>
                <div className="localizacion">
                    <img src={imgNet} className="imgNet"></img>
                    <p className="textPais">País/región: Colombia</p>
                </div>   
            </div>
            <div className="mitad">
                <div className="mitad1">
                    <a className="enlaceInformacion">Asistencia</a>
                    <a className="enlaceInformacion">Política de privacidad</a>
                    <a className="enlaceInformacion">Términos de uso del sitio web</a>
                    <a className="enlaceInformacion">Mapa del sitio</a>
                    <a className="enlaceInformacion">PlayStation Studios</a>
                    <a className="enlaceInformacion">Legal</a>
                    <a className="enlaceInformacion">Acerca de SIE</a>
                </div>
                <div className="mitad2">
                    <a className="enlaceInformacion">Términos de servicio de PSN</a>
                    <a className="enlaceInformacion">Política de cancelación de PS Store</a>
                    <a className="enlaceInformacion">Avisos de salud</a>
                    <a className="enlaceInformacion">Acerca de las clasificaciones</a>
                </div>
                <div className="mitad3">
                    <a className="enlaceInformacion">Facebook</a>
                    <a className="enlaceInformacion">Twitter</a>
                    <a className="enlaceInformacion">YouTube</a>
                    <a className="enlaceInformacion">Instagram</a>
                    <a className="enlaceInformacion">Aplicación Android</a>
                    <a className="enlaceInformacion">Aplicación iOS</a>
                </div>
            </div>
            <div className="final">
                <p className="textDerechos">© 2021 Sony Interactive Entertainment Inc. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Body8;