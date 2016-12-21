var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    //页面入口文件配置
    entry: {
        reduxDome: [ 
            './src/router.jsx',
        ]
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js',
        publicPath: "http://localhost:8080/dist",
    },
    //其他配置
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        //加载器配置
        loaders: [
            { 
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("style-loader","css-loader") 
            }, 
            { 
                test: /\.js$/, 
                loader: 'jsx-loader?harmony'
            },
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=8192&name=./images/[hash:8].[name].[ext]'
            },
            {
                test: /\.js|jsx$/, 
                loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
                /*loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname+'/src', 'js')*/
            }
        ]
    },
    //插件项
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin("[name].css"),
        /*new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()*/
    ]
};




