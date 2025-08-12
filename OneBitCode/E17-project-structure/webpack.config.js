const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') 
        }
    },

    entry: {
        main: './src/index.js'
    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    }
}