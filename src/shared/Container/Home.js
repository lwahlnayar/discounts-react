import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default class Home extends Component {
    render() {
        let top20 = this.props.retailers.map(({ path, name, id }) => (
            <li key={id}>
                <Link to={path}>{name}</Link>
            </li>
        ));

        return (
            <main id="home">
                <div id="home-layout">
                    <h1>Welcome to our Discounts Page/SEO KW 1</h1>
                    <p>
                        supppp good quality content good quality content good
                        quality content good quality content good quality
                        content good quality content good quality content good
                        quality content good quality content good quality
                        content good quality content good quality content good
                        quality content good quality content good quality
                        content good quality content good quality content good
                        quality content good quality content good quality
                        content good quality content good quality content good
                        quality content good quality content
                    </p>
                    <h2>random SEO keyword 2 here</h2>
                    <figure />
                    <figure />
                    <figure />
                    <figure />
                    <figure />
                    <figure />
                    <ul>{top20}</ul>
                </div>
            </main>
        );
    }
}
