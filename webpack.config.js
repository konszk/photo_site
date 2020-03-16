// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/swiper.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']}
        ],
    },
};