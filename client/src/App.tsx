import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/home/HomeScreen";
import Categorie from "./screen/categorie/CategorieScreen";
import { Footer, Header } from "./component";
//todo add a proxy to the package.json proxy:"http://localhost:3001"
function App(): JSX.Element {
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
                        <Categorie category_slug="homme" />
                    </Route>
                    <Route exact path="/about" />
                </Switch>

                <Footer />
            </Router>
        </>
    );
}

export default App;
