const path = require('path');

module.exports = {
    entry: { 
        main: './src/index.js',
        side: './src/hellow.js'
     },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/outputDev'),
        filename: '[name].bundle.min.js'
    }
};