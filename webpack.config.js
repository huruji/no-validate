const path = require('path');

const config = {
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'nov8n.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
}

const serverConfig = Object.assign({}, config);
serverConfig.target = 'node';
serverConfig.output.filename = 'nov8n.node.js';

module.exports = [config, serverConfig];
