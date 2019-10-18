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
  module: {  // where we defined file patterns and their loaders
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
        'style-loader',
        'css-loader',
      ]
    }
  ]
  },

  devServer: {  // configuration for webpack-dev-server
      contentBase: './dist',
      port: 7700, // port to run dev-server
  } 
};