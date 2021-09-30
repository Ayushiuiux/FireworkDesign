import './App.css';
import React, { Router } from 'react-router-dom';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import LoginHeader from './pages/LoginHeader';
import Header from './pages/header';
import MainInterface from './pages/MainInterface';
import CardCollection from './pages/CardCollection';
import CardSynthesis from './pages/CardSynthesis';
import Starship from './pages/Starship';
import StarshipEquipment from './pages/StarshipEquipment';
import StarshipUpgrade from './pages/StarshipUpgrade';
import StarshipMining from './pages/StarshipMining';
import HighRiskMining from './pages/HighRiskMining';
import InterstellarTraderTreasured from './pages/InterstellarTraderTreasured';
import InterstellarTraderClassical from './pages/InterstellarTraderClassical';
import InterstellarTraderCamp from './pages/InterstellarTraderCamp';
import CardShop from './pages/CardShop';
import ConfirmGoods from './pages/ConfirmGoods';
import OpenPackage from './pages/OpenPackage';
import Swiper from './pages/Swiper';
import Carousel from './pages/Carousel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Router path="/login-header">
            <LoginHeader />
          </Router>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/tech-center">
            <MainInterface />
          </Route>
          <Route path="/card-collection-interface">
            <CardCollection />
          </Route>
          <Route path="/card-synthesis">
            <CardSynthesis />
          </Route>
          <Route path="/startship">
            <Starship />
          </Route>
          <Route path="/starship_equipment">
            <StarshipEquipment />
          </Route>
          <Route path="/starship_upgrade">
            <StarshipUpgrade />
          </Route>
          <Route path="/starship_mining">
            <StarshipMining />
          </Route>
          <Route path="/high_risk_mining">
            <HighRiskMining />
          </Route>
          <Route path="/interstellar_trader_treasured">
            <InterstellarTraderTreasured />
          </Route>
          <Route path="/interstellar_trader_classical">
            <InterstellarTraderClassical />
          </Route>
          <Route path="/interstellar_trader_camp">
            <InterstellarTraderCamp />
          </Route>
          <Route path="/card_shop">
            <CardShop />
          </Route>
          <Route path="/confirm_goods">
            <ConfirmGoods/>
          </Route>
          <Route path="/open_package">
            <OpenPackage/>
          </Route>
          <Route path="/swiper">
            <Swiper/>
          </Route>
          <Route path="/carousel">
            <Carousel/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
