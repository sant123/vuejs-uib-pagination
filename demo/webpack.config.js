const path = require("path");

module.exports = {
    entry: {
        "commonjs": "./commonjs/src/main.js",
        "es6": "./es6/src/main.js"
    },
    devtool: "source-map",
    output: {
        filename: "./[name]/dist/main.js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            "vuejs-uib-pagination$": path.resolve(__dirname, "..", "./dist/vuejs-uib-pagination.js")
        }
    }
}