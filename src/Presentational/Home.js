import React, { Component, Fragment } from "react";

import "./Home.css";

import Header from "../Container/Header.js";
import Footer from "../Container/Footer.js";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main id="home">
                    <div id="home-layout">
                        <h1>Welcome to our Discounts Page/SEO KW 1</h1>
                        <p>
                            good quality content good quality content good
                            quality content good quality content good quality
                            content good quality content good quality content
                            good quality content good quality content good
                            quality content good quality content good quality
                            content good quality content good quality content
                            good quality content good quality content good
                            quality content good quality content good quality
                            content good quality content good quality content
                            good quality content good quality content good
                            quality content
                        </p>
                        <h2>random SEO keyword 2 here</h2>
                        <figure />
                        <figure />
                        <figure />
                        <figure />
                        <figure />
                        <figure />
                    </div>
                </main>
                <Footer />
            </Fragment>
        );
    }
}
