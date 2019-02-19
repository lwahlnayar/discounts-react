import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-elements center">
                    <div>Logo</div>
                    <div
                        style={{
                            "border-color": "black"
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
        );
    }
}

export default Header;
