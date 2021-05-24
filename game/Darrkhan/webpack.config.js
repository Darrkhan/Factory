const path = require('path');
module.exports = {
  entry: ['./src/app.js', './src/class.js', './src/map1.js'],
  module: {
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jpg']
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
