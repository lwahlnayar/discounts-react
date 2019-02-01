import retailers from "../retailers";

const routes = ["/"];

if (retailers.length > 0) {
    for (var r = 0; r <= retailers.length - 1; ++r) {
        routes.push(retailers[r].path);
    }
}

export default routes;
