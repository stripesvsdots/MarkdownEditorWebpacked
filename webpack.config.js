'use strict';

module.exports = {
  mode: 'development',
  entry: './src/app/index.js', 
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  watch: true,
  module: { 
      rules: [ 
		{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: [
        /node_modules/
      ]
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    }
  ]
  },

  devServer: {  
      contentBase: './dist',
      port: 7700
  } 
};