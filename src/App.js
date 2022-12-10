import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './componentes/Pages/Home/Home';
import Cobf from "./componentes/Pages/CobF";
import Ingressos from "./componentes/Pages/Ingressos/index";
import ProdCul from "./componentes/Pages/ProdCul/index";
import Cobf2 from "./componentes/Pages/CobF/CobF2/index";
import Cobf3 from "./componentes/Pages/CobF/CobF3/index";


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path="/ingressos" element={<Ingressos />}/>
      <Route  path="/cobf" element={<Cobf />}/>
      <Route path="/prodcul" element={<ProdCul />}/>   
      <Route exact path="/CobF2" element={<Cobf2 />} />
      <Route exact path="/CobF3" element={<Cobf3 />}/>
    </Routes>

  );
}

export default App;
