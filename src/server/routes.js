import Home from "../shared/Presentational/Home.js";
import Retailer from "../shared/Presentational/Retailer.js";
import NotFound from "../shared/Container/NotFound.js";

import retailers from "../retailers";

const routes = ["/"];

if (retailers.length > 0) {
    for (var r = 0; r <= retailers.length - 1; ++r) {
        routes.push(retailers[r].path);
    }
}

export default routes;
