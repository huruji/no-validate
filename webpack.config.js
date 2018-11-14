const path = require('path');

const config = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'noV.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    }]
  },
  mode: 'production',
}

const serverConfig = Object.assign({}, config);
serverConfig.output = Object.assign({}, config.output)
serverConfig.target = 'node';
serverConfig.output.filename = 'noV.node.js';

module.exports = [config, serverConfig];
