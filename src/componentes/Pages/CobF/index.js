import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import "./styles.css"
import { Link } from "react-router-dom";
import F1 from "../../../assets/Fotos/f1.jpg";
import F16 from "../../../assets/Fotos/Fotos2/f16.jpg";



export default function Cobf(){
    return(
        <div>
        <Header />
        <div className="containerCapa">

            <div className="fotosC">
            <Link to="/CobF2" ><img src={F1} alt="f1" width= "100%" height="100%"/></Link>
            <p><center>Lets dance</center></p>
            </div>

            <div className="fotosC">
            <Link to="/CobF3" ><img src={F16} alt="f16" width= "100%" height="100%"/></Link>
            <p><center>Hallowwen</center></p>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}