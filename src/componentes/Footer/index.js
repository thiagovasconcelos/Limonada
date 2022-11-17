import React from "react";
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import "./style.css"
export default function Footer(){
    return(
        <div className="redes">
            <a href="https://instagram.com/limonadapop?igshid=YmMyMTA2M2Y" target="_blank"><img src={Instagram} alt="insta"/></a>
            
            <a href="https://www.facebook.com/festalimonadapop" target="_blank"><img src={Facebook} alt="face"/></a>
           
        </div>
    );
}