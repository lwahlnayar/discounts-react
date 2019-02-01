import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import retailers from "../../retailers.js";

import Header from "../Presentational/Header.js";
import Footer from "../Presentational/Footer.js";
import Home from "./Home.js";
import Retailer from "./Retailer.js";
import NotFound from "../Presentational/NotFound.js";

export default function App() {
    return (
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
    );
}
