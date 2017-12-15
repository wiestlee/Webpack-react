// 预编译配置

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
	plugins: [
		new UglifyJSPlugin()  //代码压缩
 
	]
})
