import React from "react";
import { NavLink } from "react-router-dom";

import "./RetailerHeader.css";

const RetailerHeader = ({ retailer }) => {
    const title = retailer.kw1[0].toUpperCase() + retailer.kw1.slice(1);
    const date = new Date();
    const month = date.toLocaleString("en-us", { month: "long" });
    const day = date.getDate();

    return (
        <div className="retailer-header">
            <div className="retailer-h-wrapper center">
                <div className="history-links">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                    <i className="arrow-right" />
                    <NavLink exact to="/all-brands">
                        All Brands
                    </NavLink>
                    <i className="arrow-right" />
                    <NavLink exact to={retailer.url}>
                        {title}
                    </NavLink>
                </div>
                <div className="ret-title-logo">
                    <img alt="logo here " />
                    <h1>{`${title} - ${month} ${day}`}</h1>
                </div>
            </div>
        </div>
    );
};

export default RetailerHeader;
