const merge = require('webpack-merge');
const commonConfig = require("./webpack.common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
    mode: "production",
    devtool: "cheap-module-source-map",
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        }],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        }
    }
}
module.exports = merge(commonConfig, prodConfig);