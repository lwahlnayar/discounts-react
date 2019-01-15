import express from "express";

import router from "./router";
import db from "./db";

const app = express();

app.use(express.static("build"));

app.get("*", router);

// postgres query test
db.allRetailers().then(retailers => {
    console.log(retailers.rows);
});

app.listen(8080, function() {
    console.log("Main server listening on port 8080 --->");
});

export default app;
