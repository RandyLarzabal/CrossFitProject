import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screen/home/HomeScreen";
import Categorie from "./screen/categorie/Categorie";
import { Footer } from "./component";
import Icon, { IconList } from "./component/Icon/Icon";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
    const { blackBar, menu } = styles;
    return (
        <>
            <Router>
                <div>
                    <div className={blackBar}>
                        <ul className={menu}>
                            <li>
                                <a href="#">Accueil</a>
                            </li>
                            <li>
                                <a href="#">Homme</a>
                                <span>^</span>
                            </li>
                            <li>
                                <a href="#">Femme</a>
                                <span>^</span>
                            </li>
                            <li>
                                <a href="#">Enfants</a>
                                <span>^</span>
                            </li>
                            <li>
                                <a href="#">Nouveautés</a>
                            </li>
                            <li>
                                <a href="#">Recrutement</a>
                            </li>
                        </ul>
                        <div>
                            <a>AIDE</a>
                            <a className={styles.connexion}>CONNEXION</a>
                            <Icon icon={IconList.shop} size={25} color="#fff" />
                            <Icon icon={IconList.search} size={20} color="#fff" />
                        </div>
                    </div>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <Route path="/homme">
                            <Categorie />
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
