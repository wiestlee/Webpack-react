const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把sass或CSS处理好后，放到一个CSS文件中，把CSS分离成文件

module.exports = {
	entry: ['babel-polyfill','./src/index.js'], //添加入口文件，多个依赖文件一起注入。
	output: { // 项目的输出配置
		path:path.resolve(__dirname,'build'), //文件的输出目录 __dirname：表示当前的路径
		filename: 'static/js/[name].[hash:5].js'
	},
	module: {  //模块加载
		rules: [
            {

            	test: /\.css$/,  //匹配规则
            	use:[
                     "style-loader",
            		 "css-loader"           		
            	]
            },{
            	test:/\.scss$/,
            	use:ExtractTextPlugin.extract({
            		fallback: 'style-loader',
            		use: ['css-loader','sass-loader']
            	})
            },{
            	test: /\.less$/,
            	use: ExtractTextPlugin.extract({
            		fallback: 'style-loader',
            		use: ['css-loader','less-loader']
            	})
            },{
            	test: /\.jsx?$/,
            	exclude: /node_modules/,
            	use: {
            		loader: 'babel-loader'
            	}
            },{
            	test: /\.(png|svg|jpg|gif)$/,
            	use: {
            		loader: 'url-loader',
            		options: {
            			limit: 8912,
            			name: 'static/images/[name].[hash:5].[ext]'
            		}
            	}
            }

		]

	},
	plugins: [ // 插件配置
	  new CleanWebpackPlugin(['build']),  //清空编译输出的文件夹
	  new HtmlWebpackPlugin({
	  	 title: 'react-webpack-wie',
	  	 filename:'index.html',
	     inject: true,
	   /*  minify: {
	  	 	collapseWhitespace: true,
	  	 },*/
	  	 template: path.resolve(__dirname,'templates','index.html')
	  }), //生成Html5文件
      new webpack.optimize.CommonsChunkPlugin({
      	name: 'commons'
      }), // 公用代码打包
	]
}