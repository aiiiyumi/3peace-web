var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');

module.exports = {
//modeを追加
  mode: 'development',
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/src/",
      filename: "client.min.js"
  },
    devServer: {
      port: 3000,
//存在しないパスをリクエストされた場合に、404を返さずにインデックファイルを戻す
      historyApiFallback: true,
//indexのdirectoryを指定する
      static: {
      directory: path.join(__dirname, 'src'),
    },
  },
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};
