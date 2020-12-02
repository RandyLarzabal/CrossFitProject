import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import { ProductCard } from "./component";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
    return (
        <>
            <Router>
                <div>
                    
                    <div className="blackBar">
                      <a>AIDE</a>
                      <a className="connexion">CONNEXION</a>
                      <img src="cart.svg" alt="Mon panier"/>
                      <img src="search.svg" alt="Rechercher"/>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route exact path="/about" />
                    </Switch>
                    {"bar footer"}
                </div>
            </Router>
        </>
    );
}

export default App;
