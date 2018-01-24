/**
 * Created by Acer on 2018/1/16.
 */
const webpack = require('webpack');
const path = require('path');

const vendors = [
    'react',
    'react-dom'
    //...其他库
];

module.exports = {
    entry: {
        "lib": vendors
    },
    output: {
        path: path.resolve(__dirname,'./public'),
        filename: '[name].js',
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path:'manifest.json',
            name: '[name]',
            context: __dirname

        }),
    ],

};
