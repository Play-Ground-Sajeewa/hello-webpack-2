const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { LibManifestPlugin } = require("webpack");
const {default: merge} = require("webpack-merge");
const superConfig=require("./webpack.config");

module.exports=merge(superConfig,{

    output:{
        filename: 'main.[contenthash].bundle.js',
        path: __dirname +'/docs'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].min.css'
        }), 
    ],

    
    mode: 'production',
   
       
    
 

})