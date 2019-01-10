const webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const clientConfig = {
    entry: ["@babel/polyfill", __dirname + "/src/client/index.js"],
    output: {
        path: __dirname + "/build/",
        filename: "bundle.js",
        hotUpdateChunkFilename: "../hot/hot-update-client.js",
        hotUpdateMainFilename: "../hot/hot-update-client.json"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: "localhost",
        port: 3000,
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

const serverConfig = {
    entry: [__dirname + "/src/server/index.js"],
    watch: true,
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "bundle-server.js",
        libraryTarget: "commonjs2",
        hotUpdateChunkFilename: "hot/hot-update-server.js",
        hotUpdateMainFilename: "hot/hot-update-server.json"
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
                loader: "css-loader",
                options: {
                    exportOnlyLocals: true
                }
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

module.exports = [clientConfig, serverConfig];
