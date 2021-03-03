import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "./screen/home/HomeScreen";
import Categorie from "./screen/categorie/Categorie";
import { Footer, Header } from "./component";
import Icon, { IconList } from "./component/Icon/Icon";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
    const { blackBar, menu } = styles;
    return (
        <>
            <Router>
                <Header />
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
            </Router>
        </>
    );
}

export default App;
