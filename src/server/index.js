import express from "express";

import router from "./router";
import db from "./db";

const app = express();

app.use(express.static("build"));

// app.get("/all-retailers-api", (req, res) => {
//     db.allRetailers().then(retailers => {
//         res.json({
//             retailers: retailers.rows.map(({ name, url, id }) => {
//                 return { name, url, id };
//             })
//         });
//     });
// });

app.get("*", router);

app.listen(8080, function() {
    console.log("Main server listening on port 8080 --->");
});

export default app;
