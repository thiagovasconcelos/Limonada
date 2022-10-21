import React from "react";
import { Route, Switch } from "react-router-dom";
import Cobf from "./componentes/Pages/CobF";
import Home from "./componentes/Pages/Home/Home";
import Ingressos from "./componentes/Pages/Ingressos/index";
import ProdCul from "./componentes/Pages/ProdCul/index";
import ProgCul from "./componentes/Pages/ProgCul/index";

export default () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/ingressos">
                <Ingressos />
            </Route>

            <Route exact path="/cobf">
                <Cobf />
            </Route>

            <Route exact path="/prodcul">
                <ProdCul />
            </Route>

            <Route exact path="/progcul">
                <ProgCul />
            </Route>
        </Switch>
    );
}