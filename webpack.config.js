const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:4502',  // Proxy para o AEM
      files: ['dist/**/*.*', 'src/**/*.*'],
      reloadDelay: 1000,
    })
  ],
};