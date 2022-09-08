import React from "react";
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import "./style.css"
export default function Footer(){
    return(
        <div className="redes">
            <img src={Instagram} alt="insta"></img>
            <p>@limonadapop</p>
            <img src={Facebook} alt="face"></img>
            <p>limonadapop</p>
        </div>
    );
}