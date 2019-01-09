import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../shared/Presentational/App.js";
import retailers from "../retailers.js";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
