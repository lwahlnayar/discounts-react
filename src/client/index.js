import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "../shared/Container/App.js";
import retailers from "../retailers.js";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
