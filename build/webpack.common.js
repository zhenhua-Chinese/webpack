const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
module.exports = {
    entry: {
        main: "./src/index.js",
        // other: "./src/another-module.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
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
        new CleanWebpackPlugin({
			root: path.resolve(__dirname, '../')
		}),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        // "publicPath":'cdn.com.cn',
        "path": path.resolve(__dirname, "../dist"),
        "filename": "[name].js",
        "chunkFilename": '[name].bundle.js',
    }
}