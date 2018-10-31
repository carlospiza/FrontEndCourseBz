const HtmlWebpackPlugin= require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');

const path = require('path');
module.exports = {
    entry: {
      app: './src/assets/js/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({template: './index.html'}),
        new CopyWebpackPlugin([
            {
                from: './src/Components/*',
                to: 'Components/[name].[ext]',
                toType: 'template'
            },
            {
                from:'./src/data/books_json.js',
                to: 'data/books.json',
                toType: 'file'
            }
        ])
    ],
    mode: "production"
};