const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { SERVER_PORT, WEBPACK_PORT } = require("../../config/client");

const nodeModulesPath = path.resolve(__dirname, "node_modules");
const outputPath = path.resolve(__dirname, "dist");
const IS_DEV = process.env.NODE_ENV || "development";

// TODO: This might be a good idea; Part of babel; Do we want to use babel?
// const targets = IS_DEV ? { chrome: "79", firefox: "72" } : "> 0.25%, not dead";

const plugins = [
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [outputPath],
    }),
    new HTMLWebpackPlugin({
        template: "public/index.html",
    }),
    // new CopyWebpackPlugin([]), // TODOO: copy over game assets, images, css, etc
    new ManifestPlugin(),
]

const config = {
    mode: IS_DEV ? "development" : "production",
    devtool: "IS_DEV" ? "inline-source-map" : false,
    entry: "./src/index.ts",
    resolve: {
        extensions: ["tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            }
        ]
    },
    output: {
        filename: "[name]-[hash:8]-bundle.js",
        sourceMapFilename: '[file].map',
        path: outputPath,
    },
    devServer: {
        contentBase: outputPath,
        // hot: true,
        allowedHosts: [
            ".",
        ]
    },
    plugins,
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
}

module.exports = config;