const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devtool: "eval-source-map",
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        port: 8080,
        static: true,
        historyApiFallback: true,
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: "raw-loader"
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // TODO move to another folder
        alias: {
            "@store": path.resolve(__dirname,  "./src/store"),
            "@store/typings": path.resolve(__dirname,  "./src/store/typings"),
            "@components": path.resolve(__dirname,  "./src/components/"),
            "@constants": path.resolve(__dirname,  "./src/constants/"),
            "@screens": path.resolve(__dirname,  "./src/screens/"),
            "@navigation": path.resolve(__dirname,  "./src/navigation"),
            "@navigation/typings": path.resolve(__dirname,  "./src/navigation/typings"),
            "@i18n": path.resolve(__dirname,  "./src/i18n"),
            "@i18n/typings": path.resolve(__dirname,  "./src/i18n/typings"),
            "@services": path.resolve(__dirname,  "./src/services/"),
            "@services/typings": path.resolve(__dirname,  "./src/services/typings"),
            "@config": path.resolve(__dirname,  "./src/config"),
            "@config/typings": path.resolve(__dirname,  "./src/config/typings"),
            "@utilities": path.resolve(__dirname,  "./src/utilities"),
            "@utilities/typings": path.resolve(__dirname,  "./src/utilities/typings"),
            "@styles": path.resolve(__dirname,  "./src/styles"),
            "@assets": path.resolve(__dirname,  "./src/assets"),
            "@theme": path.resolve(__dirname,  "./src/styles/theme"),
            "@types": path.resolve(__dirname,  "./src/types"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "../")
        }),
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true)
        }),
    ],
}
