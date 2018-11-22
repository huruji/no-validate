const path = require('path');

const config = {
  entry: {
    main: './index.js'
  },
  output: {
    filename: 'noV.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'noV',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  mode: 'production',
}

// const serverConfig = Object.assign({}, config);
// serverConfig.output = Object.assign({}, config.output)
// serverConfig.target = 'node';
// serverConfig.output.filename = 'noV.node.js';

module.exports = [config];
