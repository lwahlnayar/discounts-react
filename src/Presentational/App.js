import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./Home.js";
import Retailer from "./Retailer.js";

function App() {
    let fakeRetailerData = ["zalando", "amazon"];
    return (
        <Router>
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/:retailer" render={() => <Retailer />} />
            </Fragment>
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
