import React, { Component } from "react";

import axios from "../../axios";
import "./Retailer.css";

export default class Retailer extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/rlp-data-api/${this.props.id}`).then(({ data }) => {
            this.setState({ retailer: data.retailer });
        });
    }

    render() {
        console.log(this.state);

        const { retailer } = this.state;

        let html = (
            <main id="rlp">
                <div id="retailer-layout" className="center">
                    <h1>
                        {retailer && retailer.kw1} - Find your code or deal
                        below!
                    </h1>
                    <p>RLP CONTENT RLP CONTENT RLP CONTEEENT</p>
                </div>
            </main>
        );

        return retailer ? html : <div>Loading</div>;
    }
}
