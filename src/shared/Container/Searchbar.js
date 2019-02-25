import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Searchbar.css";
import axios from "../../axios";

export default class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            searchedUsersArray: []
        };
        this.search = this.search.bind(this);
    }

    search(e) {
        this.setState({ input: e.target.value });
        axios.post("/search-retailers-api", e.target.value).then(res => {
            console.log(res);
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
