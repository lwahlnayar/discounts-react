import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import retailers from "../retailers.js";

import Header from "../Container/Header.js";
import Footer from "../Container/Footer.js";
import Home from "./Home.js";
import Retailer from "./Retailer.js";
import NotFound from "../Container/NotFound.js";

function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Home retailers={retailers} />}
                    />
                    {retailers.map(({ path, id }) => (
                        <Route
                            path={path}
                            exact
                            key={id}
                            render={() => <Retailer id={id} />}
                        />
                    ))}
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Fragment>
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
