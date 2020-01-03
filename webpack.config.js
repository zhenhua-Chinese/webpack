const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "./dist",
        port: 8080,
        hot: true,
        hotOnly:true
    },
    entry: {
        main: "./src/index.js",
        // sub: "./src/index.js"

    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: './images'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/templateList.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // "publicPath":'cdn.com.cn',
        "path": path.resolve(__dirname, "dist"),
        "filename": "[name].js"
    }
}