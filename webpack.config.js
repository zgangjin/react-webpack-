/**
 * Created by gangjinzhang on 2017/6/29.
 */

var htmlwebpackplugin = require('html-webpack-plugin');
var path = require('path');
var webpack =require('webpack');

module.exports={
    entry:'./src/js/main.js',
    output: {
        path: __dirname+"/dist",
        filename: "js/main.js"
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin(
            {
                filename:'app.html',
                template:'index.html',
                inject:'body'
            }
        ),
        require('autoprefixer')
    ]

}