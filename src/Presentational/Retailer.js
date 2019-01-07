import React, { Component } from "react";

import "./Retailer.css";

export default class Retailer extends Component {
    render() {
        return (
            <main id="rlp">
                <div id="retailer-layout">
                    <h1>Retailer landing page: {this.props.id}</h1>
                    <p>RLP CONTENT RLP CONTENT RLP CONTEEENT</p>
                </div>
            </main>
        );
    }
}
