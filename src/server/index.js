import express from "express";

import router from "./router";

const app = express();

app.use(express.static("build"));

app.get("*", router);

app.listen(8080, function() {
    console.log("Main server listening on port 8080 ->");
});

export default app;
