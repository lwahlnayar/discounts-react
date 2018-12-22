const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    console.log("booom");
});

app.listen(8080, function() {
    console.log("Main server listening on port 8080 ->");
});
