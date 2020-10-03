const path = require('path');

module.exports = (env) => {
  const isProd = env && env.production;
  const common = {
    entry: './src/app.ts',
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
  };
  return isProd
    ? common
    : {
        ...common,
        devServer: {
          contentBase: path.join(__dirname, 'public'),
          watchContentBase: true,
          compress: true,
          open: true,
          port: 8080,
        },
        stats: {
          modulesSort: 'size',
        },
      };
};
