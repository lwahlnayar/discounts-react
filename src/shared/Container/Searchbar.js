import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Searchbar.css";
import axios from "../../axios";

export default class Searchbar extends Component {
    constructor() {
        super();
        this.state = { searchResults: [] };
        this.search = this.search.bind(this);
        this.ajaxCall = this.ajaxCall.bind(this);
    }

    search(e) {
        if (e.target.value.length == "0") {
            return this.setState({ searchResults: [] });
        }
        const input = { input: e.target.value };
        if (this.timerId) clearTimeout(this.timerId);
        this.timerId = setTimeout(this.ajaxCall, 2500, input);
    }

    ajaxCall(obj) {
        axios.post("/search-retailers-api", obj).then(({ data }) => {
            this.setState({ searchResults: data.searchResults });
        });
    }

    render() {
        return (
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Find a shop"
                    onChange={this.search}
                />
            </div>
        );
    }
}
