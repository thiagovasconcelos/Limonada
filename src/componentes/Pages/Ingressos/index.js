import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import './styles.css'
export default function Ingresos(){
    return(
        <div>
        
        <Header />
        <div className="BodyIng">
        <div className="Ingressos">
           <a> One</a> 
        </div>
        <div className="Ingressos">
          <a>Two</a>  
        </div>
        <div className="Ingressos">
           <a>Three</a> 
        </div>
        <Footer/>        
        </div>
        </div>
    )
}