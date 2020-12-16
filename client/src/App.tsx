import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screen/home/HomeScreen";
import { ProductCard } from "./component";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
    return (
        <>
            <Router>
                <div>
                    <div className={styles.blackBar}>
                        <a>AIDE</a>
                        <a className="connexion">CONNEXION</a>
                        <img src="cart.svg" alt="Mon panier" />
                        <img src="search.svg" alt="Rechercher" />
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
                    
                    <footer className={styles.footer}>
                        <div className={styles.container}>
                            <div className={styles.adresse}>
                                <h5>Adresse</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                            </div>
                            <div className={styles.suivezNous}>
                                <h5>Suivez-nous</h5>
                                <p>Facebook</p>
                                <p>Instagram</p>
                                <p>LinkedIn</p>
                            </div>
                            <div className={styles.horaires}>
                                <h5>Horaires</h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                            </div>
                            <img src="logo.svg" alt="logo"/>
                        </div>
                        <div className={`${styles.container} ${styles.copyright}`}>
                            <p>+33 7 89 58 64 75</p>
                            <p>Une création par Momo la science</p>
                            <p>fenuafitnes©2020</p>
                        </div>
                    </footer>

                </div>
            </Router>
        </>
    );
}

export default App;
