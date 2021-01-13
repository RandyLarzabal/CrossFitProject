import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screen/home/HomeScreen";
import { Footer } from "./component";
import NavBar from "./component/NavBar/NavBar";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
    const { blackBar } = styles;
    return (
        <>
            <Router>
                <div>
                    <div className={blackBar}>
                        <a>AIDE</a>
                        <a className={styles.connexion}>CONNEXION</a>
                        <img src="cart.svg" alt="Mon panier" />
                        <img src="search.svg" alt="Rechercher" />
                    </div>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route exact path="/about" />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
