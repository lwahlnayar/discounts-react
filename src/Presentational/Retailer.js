import React, { Component, Fragment } from "react";

import "./Retailer.css";

import Header from "../Container/Header.js";
import Footer from "../Container/Footer.js";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main id="rlp">
                    <div id="home-layout">
                        <h1>Retailer landing page</h1>
                        <p>RLP CONTENT RLP CONTENT RLP CONTEEENT</p>
                    </div>
                </main>
                <Footer />
            </Fragment>
        );
    }
}
