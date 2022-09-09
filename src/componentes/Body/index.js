import React from "react";
import Fhome from "../../assets/fotoHome.jpg"
import Fh2 from "../../assets/Fh2.jpg"
import "./style.css"
export default function Body(){
    return(
        <div className="container">
           <div className="Fh2">
                <img   src={Fh2} alt="FotoHome2" width="100%" height="100%" ></img>
            </div>
            <div className="container-img">
                <img classeName="Fhome" src={Fhome} alt="FotoHome" width="100%" ></img>
            </div>
        </div>
        
    );
}