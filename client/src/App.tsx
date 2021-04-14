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
                        <Categorie category_slug="Homme" />
                    </Route>
                    <Route path="/femme">
                        <Categorie category_slug="Femme" />
                    </Route>
                    <Route path="/streetwear">
                        <Categorie category_slug="Streetwear" />
                    </Route>
                    <Route path="/accessoire">
                        <Categorie category_slug="Accessoire" />
                    </Route>
                    <Route path="/edition-limite">
                        <Categorie category_slug="Edition Limité" />
                    </Route>
                    <Route path="/promotion">
                        <Categorie category_slug="Promotion" />
                    </Route>
                    <Route path="/enfant">
                        <Categorie category_slug="Enfant" />
                    </Route>
                    <Route path="/contact">
                        <Categorie category_slug="Contact" />
                    </Route>
                    <Route exact path="/about" />
                </Switch>

                <Footer />
            </Router>
        </>
    );
}

export default App;
