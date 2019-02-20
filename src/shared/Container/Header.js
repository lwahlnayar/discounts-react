import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import window from "global";

import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            prevScroll: window.pageYOffset,
            visible: true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        let curScroll = window.pageYOffset,
            { prevScroll } = this.state;
        let visible = prevScroll >= curScroll;

        this.setState({ prevScroll: curScroll, visible });
    }

    render() {
        return (
            <div className="header-grid">
                <header
                    className={this.state.visible ? "hd-active" : "hd-hidden"}
                >
                    <div className="header-elements center">
                        <div>Logo</div>
                        <div
                            style={{
                                border: "1px solid black"
                            }}
                        >
                            Search Component Here
                        </div>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/top-brands"
                                    activeClassName="active-nav-link"
                                >
                                    Top Brands
                                </NavLink>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active-nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
