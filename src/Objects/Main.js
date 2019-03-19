import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stroji from "./Stroji";
import Kontakt from "./Kontakt";
import Cena from "./Cena";
 
class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
              <ul className="header">
                <li><NavLink exact to="/">Domov</NavLink></li>
                <li><NavLink to="/stroji">Stroji</NavLink></li>
                <li><NavLink to="/cena">Cena</NavLink></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/stroji" component={Stroji}/>
                <Route path="/cena" component={Cena}/>
                <Route path="/kontakt" component={Kontakt}/>
              </div>
            </div>
          </HashRouter>
        );
      }
    }
 
export default Main;