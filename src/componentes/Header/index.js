import React from "react";
import logo from "../../assets/logo2.png";
import "./styles.css";
import { Link } from 'react-router-dom';

export default function Header(){

    return (
        <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo limonada" width={500} height={200} />
                </div>
                <div className="Menu">
                    <nav>
                        
                            <Link className="link" to= "/">Inicio</Link>
                            <Link className="link" to="/progcul">Programação Cultural</Link>
                            <Link className="link" to="/cobf">Cobertura Fotógrafica</Link>
                            <Link className="link" to="/ingressos">Ingressos</Link>
                            <Link className="link" to="/prodcul">Produção Cultural</Link>
                        
                    </nav>
                </div>
        </header>
    );
}
