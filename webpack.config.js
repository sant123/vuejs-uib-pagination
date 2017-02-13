var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        "vuejs-uib-pagination": "./src/index.ts"
    },
    output: {
        filename: "./dist/[name].js",
        library: "vuejs-uib-pagination",
        libraryTarget: "umd"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],
}