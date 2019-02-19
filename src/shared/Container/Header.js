import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import window from "global";

import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            prevScrollUp: window.pageYOffset,
            visible: true
        };
    }

    render() {
        return (
            <div className="header-grid">
                <header className={!this.state.visible && "header-hidden"}>
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
                                <NavLink to="/">Home</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
