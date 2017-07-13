const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html'
        }),
        new WebpackPwaManifest({
            name: 'test',
            short_name: 'test',
            description: 'test',
            icons: [
                {
                    src: path.resolve('./src/images/icon.png'),
                    size: '192x192',
                    type: 'image/png'
                }
            ],
            display: 'standalone',
            start_url: './?utm_source=web_app_manifest'
        })
    ]
};
