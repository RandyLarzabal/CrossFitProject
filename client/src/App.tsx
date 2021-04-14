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
                        <Categorie category_slug="homme" category_label={"Homme"} />
                    </Route>
                    <Route path="/femme">
                        <Categorie category_slug="femme" category_label={"Femme"} />
                    </Route>
                    <Route path="/streetwear">
                        <Categorie category_slug="streetwear" category_label={"Streetwear"} />
                    </Route>
                    <Route path="/accessoire">
                        <Categorie category_slug="accessoire" category_label={"Accessoire"} />
                    </Route>
                    <Route path="/edition-limite">
                        <Categorie category_slug="edition Limité" category_label={"Edition Limité"} />
                    </Route>
                    <Route path="/promotion">
                        <Categorie category_slug="promotion" category_label={"Promotion"} />
                    </Route>
                    <Route path="/enfant">
                        <Categorie category_slug="enfant" category_label={"Enfant"} />
                    </Route>
                    <Route path="/contact">
                        <Categorie category_slug="contact" category_label={"Contact"} />
                    </Route>
                    <Route exact path="/about" />
                </Switch>

                <Footer />
            </Router>
        </>
    );
}

export default App;
