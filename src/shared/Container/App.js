import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import retailerData from "../../retailer-data";
import axios from "../../axios.js";

import Header from "./Header.js";
import Footer from "../Presentational/Footer.js";
import Home from "./Home.js";
import Retailer from "./Retailer.js";
import NotFound from "../Presentational/NotFound.js";

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Home retailers={retailerData} />}
                    />
                    {retailerData.map(({ url, id }) => (
                        <Route
                            path={url}
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
}
