import express from "express";
import bodyParser from "body-parser";

import router from "./router";
import db from "./db";

const app = express();

app.use(bodyParser.json());
app.use(express.static("build"));

app.get("/all-retailers-api", (req, res) => {
    db.allRetailers().then(retailers => {
        res.json({
            retailers: retailers.rows.map(({ name, url, id }) => {
                return { name, url, id };
            })
        });
    });
});

app.get("/rlp-data-api/:id", (req, res) => {
    const id = req.params.id;
    db.retailerData(id).then(retailer => {
        res.json({ retailer: retailer.rows[0] });
    });
});

app.post("/search-retailers-api", (req, res) => {
    console.log(req.body.input);
    db.search(req.body.input).then(({ rows }) => {
        res.json({ searchResults: rows });
    });
});

app.get("*", router);

app.listen(8080, function() {
    console.log("Main server listening on port 8080 --->");
});

export default app;
