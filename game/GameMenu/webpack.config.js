const path = require('path');
module.exports = {
  entry: ['./src/app.js','./src/class.js','./src/map1.js','./src/Menu.js','./src/Selection_Niveaux.js'],
  module: {
    
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jpg','png', 'wav']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};
