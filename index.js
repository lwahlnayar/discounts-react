// const express = require("express");
// const app = express();
// const compression = require("compression");
//
// app.use(express.static("dist"));
// app.use(compression());
//
// // if (process.env.NODE_ENV != "production") {
// //     app.use(
// //         require("http-proxy-middleware")({
// //             target: "http://localhost:8081/"
// //         })
// //     );
// // } else {
// //     app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
// // }
//
// console.log("tesst");
//
// app.get("*", function(req, res) {
//     res.sendFile(__dirname + "/index.html");
//     console.log("booom");
// });
//
// app.listen(8080, function() {
//     console.log("I'm listening.");
// });
