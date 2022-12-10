import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import PodcastOne from "../../../assets/Podcast.png"
import './styles.css'

export default function ProdCul(){
    return(
        <div>
        <Header />

            <h2><center>Lives e Podcast</center></h2>

        <div className="ProdCul">
        <div className="Event">
   
        <a href="https://drive.google.com/file/d/1xej-rTsFvx2JFgNzBmy5Q7uao6TzkJOF/view?usp=share_link" target="_blank"><img className="CapaPod" src={PodcastOne} alt="face"/></a>

                 <a2><center>Live: A falta de políticas públicas para pessoas gordas</center> </a2>
        </div>
        
        </div>
        <Footer/>
        </div>
    )
}