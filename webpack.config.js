const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    entry: "./src/sidebar.ts",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|ico|svg|ttf|woff|woff2)$/,
                use: ["file-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }
        ]
    },
    output: {
        filename: "sidebar-[chunk:8].js",
        path: path.resolve(__dirname, "dist")
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/templates/index.template.html"
        })
    ],
    resolve: {
        extensions: [".js", ".ts"]
    }
}
