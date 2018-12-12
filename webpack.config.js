const webpack = require("webpack");

module.exports = {
    entry: ["@babel/polyfill", __dirname + "/src/app.js"],
    output: {
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,

        host: "localhost", // Defaults to `localhost`
        port: 3000, // Defaults to 8080
        proxy: {
            "/": {
                target: "http://localhost:8080",
                secure: false
            }
        }
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ]
};
