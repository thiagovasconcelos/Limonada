import React from "react";
import logo from "../../assets/logo2.png"
import "./styles.css"

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt="logo limonada" width={500} height={200} />
            <button>Menu</button>

        </header>
    )
}