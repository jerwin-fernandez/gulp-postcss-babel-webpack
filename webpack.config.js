var path = require('path');
 
module.exports = {
  mode: 'development',
  entry: "./src/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./src/temp/scripts/"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
