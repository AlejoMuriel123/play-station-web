import React from "react";
import "./CSS_BODY4_5/style_body4.css";
import TarjetaJuegoInicial from "../TarjetasJuegos/TarjetaJuegoInicial";
import TarjetaJuegoSecundario from "../TarjetasJuegos/TarjetaJuegoSecundario";
import imagenTarjeta1 from "../../Images/tarjetasJuegoInicial/farCry6.jpg";
import imagenTarjeta2 from "../../Images/tarjetasJuegoInicial/warframe.jpg";
import imagenTarjeta3 from "../../Images/tarjetasJuegoInicial/cod.jpg";
import imagenTarjeta4 from "../../Images/tarjetasJuegoInicial/stranger.jpg";
import imagenTarjeta1S from "../../Images/tarjetasJuegoSecundarias/messi.jpg";
import imagenTarjeta2S from "../../Images/tarjetasJuegoSecundarias/hell.jpg";
import imagenTarjeta3S from "../../Images/tarjetasJuegoSecundarias/englsted.jpg";
import imagenTarjeta4S from "../../Images/tarjetasJuegoSecundarias/fifa22.jpg";
import imagenTarjeta5S from "../../Images/tarjetasJuegoSecundarias/fifa22_2.jpg";
import imagenTarjeta1S2 from "../../Images/tarjetasJuegoSecundarias/faming.jpg";
import imagenTarjeta2S2 from "../../Images/tarjetasJuegoSecundarias/horizon.jpg";
import imagenTarjeta3S2 from "../../Images/tarjetasJuegoSecundarias/jurassic.jpg";
import imagenTarjeta4S2 from "../../Images/tarjetasJuegoSecundarias/guardians.jpg";
import imagenTarjeta5S2 from "../../Images/tarjetasJuegoSecundarias/nascar.jpg";
import imagenTarjeta6S2 from "../../Images/tarjetasJuegoSecundarias/riders.jpg";

const Body4 = function()
{
    return(
        <div className="divBody4">
            <div className="divJuegoInicial">       
                <a className="enlaceTarjetaInicial"><TarjetaJuegoInicial source={imagenTarjeta1}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaJuegoInicial source={imagenTarjeta2}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaJuegoInicial source={imagenTarjeta3}/></a>
                <a className="enlaceTarjetaInicial"><TarjetaJuegoInicial source={imagenTarjeta4}/></a>
            </div>
            <div className="divJuegosSecundarios">  
                <div className="divIntermedioBody4">
                    <h3 className="textoNuevosJuegos">Nuevos juegos</h3>
                    <a className="enlaceVerTodos">Ver todos</a>                   
                </div>   
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta1S}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta2S}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta3S}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta4S}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta1S}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta5S}/></a>
            </div>
            <div className="divJuegosProximos">
                <div className="divIntermedioBody4">
                    <h2 className="textoNuevosJuegos">Próximamente</h2>
                    <a className="enlaceVerTodos">Ver todos</a> 
                </div> 
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta1S2}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta2S2}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta3S2}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta4S2}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta5S2}/></a>
                <a className="enlaceTarjetaSecundaria"><TarjetaJuegoSecundario source={imagenTarjeta6S2}/></a>
            </div>
        </div>
    );
}

export default Body4;