import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import './styles.css'
import Evento07 from "./../../../assets/evento07jan.png"
import Evento14 from "./../../../assets/evento14jan.png"
export default function Ingresos(){
    return(
        <div>
        
        <Header />
        <div className="BodyIng">
        <div className="Ingressos">
           <a> Brasil</a>
           <a href="https://www.sympla.com.br/limonada-pop__1797237" target="_blank"><img className="evento" src={Evento07} alt="event07"/></a>
        </div>
        <div className="Ingressos">
          <a>Aloha</a>
          <a href="https://www.sympla.com.br/aloha-de-verao-open-bar-all-night__1797253
            " target="_blank"><img className="evento" src={Evento14} alt="event07"/></a>


        </div>
        
        <Footer/>        
        </div>
        </div>
    )
}