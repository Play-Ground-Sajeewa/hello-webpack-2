const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {default: merge} = require("webpack-merge");
const superConfig=require("./webpack.config");

module.exports=merge(superConfig,{

    mode: 'development',
   
   
    devServer: {
       port: 3000
    },
    devtool:false,
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        }), 
    ],
 

})