const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'app.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { 
        contentBase: path.join(__dirname, 'src'), 
        //compress: true, 
        port: 9000, 
        publicPath: "/",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new VueLoaderPlugin()
    ]
}
