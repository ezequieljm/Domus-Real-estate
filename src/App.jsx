// React Libs
import React from "react";

// Application Components
import Secretary from "./components/Secretary/Secretary";
import GeneralManager from "./components/GeneralManager/GeneralManager";
import Cashier from "./components/Cashier/Cashier";
import HouseAgent from "./components/HouseAgent/HouseAgent";
import MainPage from "./MainPage/MainPage";
import BossOfManage from "./components/BossOfManage/BossOfManage";
import Marketing from "./components/Marketing/Marketing";
import SiteAdministrator from "./components/SiteAdministrator/SiteAdministrator";
import BossOfCommerce from "./components/BossOfCommerce/BossOfCommerce";

// ReactRouter Component
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () =>
    <Router>
        <Switch>
            <Route exact path="/secretaria" children={<Secretary />} />
            <Route exact path="/gerencia" children={<GeneralManager />} />
            <Route exact path="/administracion" children={<BossOfManage />} />
            <Route exact path="/caja" children={<Cashier />} />
            <Route exact path="/asesoria" children={<HouseAgent />} />
            <Route exact path="/marketing" children={<Marketing />} />
            <Route exact path="/administracion-del-sitio" children={<SiteAdministrator />} />
            <Route exact path="/comercio" children={<BossOfCommerce />} />
            <Route exact path="/" children={<MainPage />} />
            <Route path="*" children={<h1>Error 404</h1>} />
        </Switch>
    </Router>

export default App;
