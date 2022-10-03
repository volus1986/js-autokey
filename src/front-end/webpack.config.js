const path = require("path");
const outputDir = path.join(__dirname,"..","..", "dist", "front-end");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: "development",
    entry: path.join(__dirname),
    output: {
        path: outputDir,
        filename: "index.js"
    },
    optimization: {
        minimize: false,
    },
    target: "web",
    devServer: {
        port: "9500",
        // static: path.join(__dirname),
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module:{
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                // use: [
                //     {
                //         loader: 'ts-loader',
                //     },
                //     {
                //         loader: 'babel-loader',
                //         options: {
                //             presets: ['@babel/preset-react'],
                //         },
                //     },
                // ]
            },
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.join(__dirname, 'index.html')
        })
    ]
}