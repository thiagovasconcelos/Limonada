import React from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import "../styles.css"
import F1 from "../../../../assets/Fotos/f1.jpg";
import F2 from "../../../../assets/Fotos/f2.jpg";
import F3 from "../../../../assets/Fotos/f3.jpg";
import F4 from "../../../../assets/Fotos/f4.jpg";
import F5 from "../../../../assets/Fotos/f5.jpg";
import F6 from "../../../../assets/Fotos/f6.jpg";
import F7 from "../../../../assets/Fotos/f7.jpg";
import F8 from "../../../../assets/Fotos/f8.jpg";
import F9 from "../../../../assets/Fotos/f9.jpg";
import F10 from "../../../../assets/Fotos/f10.jpg";
import F11 from "../../../../assets/Fotos/f11.jpg";
import F12 from "../../../../assets/Fotos/f12.jpg";

export default function Cobf(){
    return(
        <div>
        <Header />
        <h1><center>Lets dance</center></h1>

        <div className="containerF1">
           

            <div className="fotos">
            <img src={F1} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F2} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F3} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F4} alt="f1" width= "100%" height="100%"/>
            </div>
            </div>
            <div className="containerF2">
            <div className="fotos">
            <img src={F5} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F6} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F7} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F8} alt="f1" width= "100%" height="100%"/>
            </div>
            </div>
            <div className="containerF3">
            <div className="fotos">
            <img src={F9} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F10} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F11} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F12} alt="f1" width= "100%" height="100%"/>  
            </div>
        </div>
        <Footer/>
        </div>
    )
}