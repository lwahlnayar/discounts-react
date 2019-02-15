const db = require("./server/db");
const { writeFile } = require("fs");

db.allRetailers().then(retailers => {
    const data = retailers.rows.map(i => {
        return { name: i.name, url: "/" + i.url, id: i.id, quality: i.quality };
    });
    const dataJSON = JSON.stringify(data);
    writeFile("retailer-data.json", dataJSON, function(err, data) {
        if (err) console.log("Error writing file -> ", err);
        console.log("Successfully Written to File.");
    });
});
