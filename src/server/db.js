const spicedPg = require("spiced-pg");

//Makes connection from server to database
const db = spicedPg(
    process.env.DATABASE_URL || require("../../secrets.json").pgLocalLogin
);

module.exports.allRetailers = () => db.query(`SELECT * FROM retailers`);

module.exports.allRetailers = string => {
    const query = `SELECT name, active_vouchers FROM retailers
                  WHERE (name ILIKE $1)
                  ORDER BY name ASC LIMIT 4`;
    db.query(query, [string]);
};

// module.exports.createRetailer = (
//     name,
//     quality,
//     active_vouchers,
//     published,
//     indexed,
//     kw1,
//     url
// ) => {
//     const query = `INSERT INTO retailers (name, quality, active_vouchers, published, indexed, KW1, url) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
//     return db.query(query, [
//         name,
//         quality,
//         active_vouchers,
//         published,
//         indexed,
//         kw1,
//         url
//     ]);
// };
