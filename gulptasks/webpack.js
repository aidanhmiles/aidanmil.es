

// - - - - NPM MODULES
var gulp = require('gulp');
var gutil = require('gulp-util');
// var webpack = require('webpack-stream');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// - - - - project modules
var paths = require('../paths.js');
var opts = require('./cli_opts.js');

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV){
  throw 'NODE_ENV should be set already';
}

function runWebpack(done){
  // run webpack
  webpack(getWebpackConfig(), function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
        // output options
    }));
    done();
  });
}


gulp.task('webpack-dev-server', runWebpackDevServer);

function runWebpackDevServer(done) {
    // Start a webpack-dev-server
    var compiler = webpack(getWebpackConfig());

    new WebpackDevServer(compiler, {
      contentBase: 'client/dist/',
      // hot: true
    })
    .listen(8083, 'localhost', function(err) {
      if(err) throw new gutil.PluginError('webpack-dev-server', err);
      // Server listening, this index.html shows the status of WebpackDevServer
      gutil.log('[webpack-dev-server]', 'http://localhost:8083/webpack-dev-server/index.html');

      // keep the server alive or continue?
      done();
    });
}

function getWebpackConfig(){
  var webpackConfig = {
    // watch: true,
    cache: true,
    devtool: (opts.isProd ? '' : 'inline-source-map'),
    // directories to search when using require('moduleName');
    resolve: {
      modules: ['node_modules', 'client/src/vendor']
    },
    entry: {
      // these are require()-able modules, from node_modules
      vendor: ['react', 'lodash', 'bluebird'],
      hotLoader: 'react-hot-loader/patch',
      // ES6 alert: new feature, computed key names
      [paths.config.projectName]: paths.src.client.webpackEntryFile
    },
    output: {
      path: paths.dist.dir,
      filename: '[name]' + (opts.isProd ? '.bundle.min.js' : '.bundle.js')
    },
    module: {
      // preLoaders: [{
      //   test: /\.js$/, 
      //   use: 'eslint', 
      //   exclude: /node_modules/
      // }],
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|server|db|test)/,
          use: [
            'react-hot-loader/webpack',
            {
              loader: `babel-loader`,
              options: {
                presets: [
                  [ 
                    '@babel/preset-env',
                    {
                      "targets": {
                        "chrome": 62
                      }
                    }
                  ], 
                  '@babel/react'
                ],
                // plugins: [
                //   'react-hot-loader/babel'
                // ]
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: opts.isProd
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !opts.isProd
              }
            }
          ]
        },
        { 
          test: /\.(png|svg)$/, 
          use: 'url?limit=10000&name=images/[name].[ext]' 
        },
        // fonts are loaded via the file-loader, which here just copies files from a to b
        { 
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'url?name=fonts/[name].[ext]' 
        },
        { 
          test: /\.(pdf)$/,
          use: 'file?name=[name].[ext]' 
        },
      ]
    },
    // eslint: {
    //   configFile: 'gulptasks/eslintrc.yaml',
    //   fix: true
    // }
  };

  webpackConfig.plugins = [

    // this plugin allows to require('vendorModule') from client code,
    // while keeping all vendor module source in vendor.bundle.js
    // without it, app.bundle.js will contain duplicated required vendor modules
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: `vendor.bundle${opts.isProd ? '.min' : ''}.js` }),

    // this plugin generates an index.html file,
    // and provides extras like setting global ENV vars
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      filename: paths.dist.indexFile,
      title: 'Aidan H. Miles',
      appMountId: 'mountpoint',
      hash: true,
      devServer: (opts.isProd ? false : 'http://localhost:8083'),
      // chunksSortMode may or may not actually do anything currently
      // the idea is that it specifies load order of the chunks (in this case 
      // the main app bundle and the vendor bundle
      chunksSortMode: 'dependency', 
      window: {
        env: {
        }
      },
      googleAnalytics: {
        trackingId: 'UA-63108049-1',
        pageViewOnLoad: opts.isProd
      },
      minify: {
        removeComments: opts.isProd,
        collapseWhitespace: opts.isProd,
        conservativeCollapse: opts.isProd
      },
      // this must be false for html-webpack-template to do its thing
      inject: false
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];

  if (opts.isProd) {
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    );
  }
  return webpackConfig;
}

module.exports = {
  runWebpack,
  runWebpackDevServer
};

