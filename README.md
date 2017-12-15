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




