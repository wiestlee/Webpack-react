# 前言

---

本篇内容主要学习如何使用webpack构建一个React的应用。

主要用于webpack和react的学习。


# 使用的技术栈

---

该项目实战用到的主要框架有：

- webpack：预编译模块打包工具。
- React： 构建用户界面Javascript库。
- Redux： 管理整个应用的数据流。
- React-router： React应用路由
- styled-components： React中的css最佳实践
- less：CSS预处理器
- sass：更强大的CSS预处理
- isomorphic-fetch: fetch兼容库
- ECharts： 基于html5 Canvas图表库


#环境搭建

---

系统环境：windows10

# Node.js 安装

---

进入Node.js官网[点击前往](https://nodejs.org/)，`选择LTS版本`


# npm 部署
---

### npm更新并部署至全局

```
npm install npm -g

# 可设置淘宝镜像

npm config set registry https://registry.npm.taobao.org 

```

npm 常用命令：

```
npm init # 引导创建pakage.json文件

npm install *** # 本地安装；会在当前目录生成node_modules文件夹

npm install *** -g # 全局安装；目录会在C:\Users\***\AppData\Roaming\npm\node_modules安装

npm install *** --save # 运行时依赖的模块；自动把模块和版本号添加到package.json文件的dependencies部分

npm install *** --save-dev # 开发时依赖的模块；自动把模块和版本号添加到package.json中

npm updata *** # 更新node模块

npm uninstall *** # 卸载node模块

```

# 创建package.json 文件

---

``` 
npm init

npm init -y #跳过提问阶段直接生成一个新package.json文件

```
# 安装模块

---

```
npm install webpack webpack-dev-server webpack-merge clean-webpack-plugin --save-dev

npm install css-loader style-loader less less-loader node-sass sass-loader file-loader url-loader postcss postcss-loader --save-dev

npm install babel-loader babel-core babel-polyfill babel-preset-env babel-preset-react --save-dev

npm install react react-dom react-router react-router-redux history redux react-redux redux-logger redux-thunk --save-dev

npm install styled-components isomorphic-fetch echarts --save-dev

npm install html-webpack-plugin uglifyjs-webpack-plugin --save-dev

npm install extract-text-webpack-plugin --save-dev 

```
模块简要说明：

>* react react-dom : React的依赖
>* redux react-redux react-logger react-thunk :Redux的依赖
>* react-router react-router-redux history : React-router 的依赖
>* styled-components: React中的CSS实现的依赖
>* isomorphic-fetch: fetch的兼容库
>* echarts: 基于HTML5 canvas图表库
>* babel-polyfill:用于实现浏览器不支持原生功能的代码
>* webpack: 预编译模块打包
>* webpack-dev-server:实现重新加载的web服务器
>* webpack-merge: webpack配置分离插件
>* clean-webpack-plugin: 在building之前删除你以前的build的文件
>* babel-loader babel-core babel-preset-env babel-preset-react:转码器babel的依赖
>* css-loader style-loader file-loader url-loader:各格式文件打包的依赖
>* html-webpack-plugin: 生成HTML5文件的插件
>* uglifyjs-webpack-plugin: 代码压缩插件
>* postcss-loader: CSS转化样式插件
>* extract-text-webpack-plugin: 把CSS分离成文件 把less或sass处理好后放到一个css文件中用这个插件实现

# 配置模块

---

在项目根目录下生成.babelrc文件(window下文件重命名为.babelrc),并写入如下数据

```
{
	"presets":["env","react"]
}
```
配置package.json文件：运行npm run build 启动编译模式和 npm run start 热更新模式：

```
"scripts":{
	"dev": "webpack-dev-server --config webpack.dev.js",
	"build": "webpack --config webpack.prod.js",
	"watch": "webpack --progress --colors --watch"
}
```
根据目录新建webpack配置文件：webpack.common.js、webpack.dev.js、webpack.prod.js;

**webpack.common.js**(公用配置)

```
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
	 // new CleanWebpackPlugin(['build']),  //清空编译输出的文件夹
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
```
**webpack.dev.js**(开发配置)

```
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
	devtool: 'inline-source-map', //代码关联显示方式
	devServer: {
		historyApiFallback:true, //文件重定向，和react-router相关
		hot:true,  //开启模块热替换
		progress:true,
		port:8000,  // 服务器端口
		host:'localhost',
		inline:true,
		open: true,  // 自动打开浏览器标签
	},
	plugins: [
		new webpack.NamedModulesPlugin(), //显示模块的相对路径
		new webpack.HotModuleReplacementPlugin() // 加载热替换插件
	]
		

});

```

**webpack.prod.js** (预编译配置)

```
// 预编译配置

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
	plugins: [
		new UglifyJSPlugin()  //代码压缩
 
	]
})


```
