import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stroji from "./Stroji";
import Produkti from "./Produkti";
import Kontakt from "./Kontakt";
//import Cena from "./Cena";
import logo from "../Media/Logo.svg";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
              <div> <img className="logo" src={logo} alt="Logo" /></div>
              <ul className="header">
                <li><NavLink exact to="/">Domov</NavLink></li>
                <li><NavLink to="/stroji">Strojni Park</NavLink></li>
                <li><NavLink to="/produkti">Galerija</NavLink></li>
                {/*<li><NavLink to="/cena">Cena</NavLink></li>*/}
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/stroji" component={Stroji}/>
                <Route path="/produkti" component={Produkti}/>
                {/*<Route path="/cena" component={Cena}/>*/}
                <Route path="/kontakt" component={Kontakt}/>
              </div>
              <div className="footer">
                <p className="Contact">Tomo Ravnjak s.p,Brezje pri Oplotnici 32, 2317 Oplotnica</p>
                <p className="Number Mail">tomo.ravnjak.s.p@gmail.com</p>
              </div>
            </div>
          </HashRouter>
        );
      }
    }
 
export default Main;