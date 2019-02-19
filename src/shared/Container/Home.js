import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default class Home extends Component {
    render() {
        let top20 = this.props.retailers.map(({ url, name, id }) => (
            <li key={id}>
                <Link to={url}>{name}</Link>
            </li>
        ));

        return (
            <main id="home">
                <div id="home-layout" className="center">
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
