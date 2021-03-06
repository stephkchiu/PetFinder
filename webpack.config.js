const path = require('path');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
      rules: [{
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false
      }, 
      '/api': 'http://localhost:3000',
    }
  }
}