const webpack = require("webpack");
const path = require("path");

let isProd = process.env.NODE_ENV === "production";

let webpack_config = {
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
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    minimize: true
                }
            }
        ]
    },
    plugins: [

    ]
};

if (isProd) {
    let uglifyConfig = new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    });

    webpack_config.plugins.push(uglifyConfig);
}

module.exports = webpack_config;