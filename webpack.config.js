var path = require("path");

module.exports = {
    entry: ["@babel/polyfill", __dirname + "/src/app.js"],
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
