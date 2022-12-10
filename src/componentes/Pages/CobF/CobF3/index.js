import React from "react";
import Footer from "../../../Footer";
import Header from "../../../Header";
import "../styles.css"
import F13 from "./../../../../assets/Fotos/Fotos2/f13.jpg"
import F14 from "./../../../../assets/Fotos/Fotos2/f14.jpg"
import F15 from "./../../../../assets/Fotos/Fotos2/f15.jpg"
import F16 from "./../../../../assets/Fotos/Fotos2/f16.jpg"
import F17 from "./../../../../assets/Fotos/Fotos2/f17.jpg"
import F18 from "./../../../../assets/Fotos/Fotos2/f18.jpg"
import F19 from "./../../../../assets/Fotos/Fotos2/f19.jpg"
import F20 from "./../../../../assets/Fotos/Fotos2/f20.jpg"
import F21 from "./../../../../assets/Fotos/Fotos2/f21.jpg"
import F22 from "./../../../../assets/Fotos/Fotos2/f22.jpg"


export default function Cobf(){
    return(
        <div>
        <Header />
        <h1><center>Hallowen</center></h1>

        <div className="containerF1">
            <div className="fotos">
            <img src={F13} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F14} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F15} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F16} alt="f1" width= "100%" height="100%"/>
            </div>
            </div>
            <div className="containerF2">
            <div className="fotos">
            <img src={F17} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F18} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F18} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F19} alt="f1" width= "100%" height="100%"/>
            </div>
            </div>
            <div className="containerF3">
            <div className="fotos">
            <img src={F20} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F21} alt="f1" width= "100%" height="100%"/>
            </div>
            <div className="fotos">
            <img src={F22} alt="f1" width= "100%" height="100%"/>
            </div>
        
        </div>
        <Footer/>
        </div>
    )
}