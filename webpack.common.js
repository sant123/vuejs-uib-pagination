const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        "vuejs-uib-pagination": "./src/index.ts"
    },
    output: {
        filename: "./dist/[name].js",
        library: "vuejs-uib-pagination",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }
        ]
    }
};