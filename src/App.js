import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './componentes/Pages/Home/Home';
import Cobf from "./componentes/Pages/CobF";
import Ingressos from "./componentes/Pages/Ingressos/index";
import ProdCul from "./componentes/Pages/ProdCul/index";
import ProgCul from "./componentes/Pages/ProgCul/index";


function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path="/ingressos" element={<Ingressos />}/>
      <Route  path="/cobf" element={<Cobf />}/>
      <Route path="/prodcul" element={<ProdCul />}/>   
      <Route exact path="/progcul" element={<ProgCul />} />
    </Routes>

  );
}

export default App;
