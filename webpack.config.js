const webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", __dirname + "/src/app.js"],
    output: {
        filename: "bundle.js"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ]
};
