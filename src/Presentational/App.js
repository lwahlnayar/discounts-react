import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Header from "../Container/Header.js";
import Footer from "../Container/Footer.js";
import Home from "./Home.js";

function App() {
    return (
        <Fragment>
            <Header />
            <Home />
            <Footer />
        </Fragment>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
