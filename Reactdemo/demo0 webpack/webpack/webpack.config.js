const  Webpack = require('webpack');

module.exports =  {
    devtool: 'eval-source-map',
    entry: __dirname+"/app/main.js",
    output: {
        path: __dirname+"/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test:/\.js$/,
            exclude:/node_moudles/,
            loaders:'babel-loader'
        },{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        }]
    },
    plugins: [
        new Webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        })
    ],
    devServer: {

    }
}