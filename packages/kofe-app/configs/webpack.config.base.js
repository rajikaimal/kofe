/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import {dependencies} from '../package.json';

export default {
  externals : [...Object.keys(dependencies || {})],

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader', // translates CSS into CommonJS
          }, 
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
                'text-color': 'white'
              },
              javascriptEnabled: true
            }
          }
        ],
        // ...other rules
      }
    ]
  },

  output : {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve : {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins : [
    new webpack.EnvironmentPlugin({NODE_ENV: 'production'}),

    new webpack.NamedModulesPlugin()
  ]
};
