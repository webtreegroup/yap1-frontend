const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/App.ts',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'static/src/js'),
        publicPath: '/static'
    },
}