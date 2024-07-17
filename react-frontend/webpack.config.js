const path = require('path');
// html 플러그인을 불러오고
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // 여기에 설정
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html" // index.html을 기본 템플릿으로 반영할 수 있도록 설정
  })],
  stats: {
    children: true
  }
}