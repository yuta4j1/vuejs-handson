const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        css: ['vue-style-loader', 'css-loader']
                    }            
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'static'),
        publicPath: '/',
        open: true
    }
}