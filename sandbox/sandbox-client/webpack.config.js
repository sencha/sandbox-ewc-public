const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs-extra');

module.exports = function(env) {
    function get(it, val) {if(env == undefined) {return val;} else if(env[it] == undefined) {return val;} else {return env[it];}}

    var profile = get('profile', '');
    var emit = get('emit', 'yes');
    var environment = get('environment', 'development');
    var treeshake = get('treeshake', 'no');
    var browser = 'no'; // get('browser', 'no');
    var watch = get('watch', 'yes');
    var verbose = get('verbose', 'no');
    var basehref = get('basehref', '/');
    var build_v = get('build_v', '7.0.0.0');

    const isProd = environment === 'production';
    const outputFolder = 'build';

    const plugins = [
        new HtmlWebpackPlugin({template: 'index.html', hash: false, inject: 'body'}),
        
        new BaseHrefWebpackPlugin({ baseHref: basehref }),
        
        new ExtWebpackPlugin({
          framework: 'web-components',
          toolkit: 'modern',
          theme: 'theme-material',
          emit: emit,
          script: './extract-code.js',
          port: 8080,
          packages: [
              'renderercell',
              'font-ext',
              'ux',
              'd3',
              'pivot-d3',
              'font-awesome',
              'exporter',
              'pivot',
              'calendar',
              'charts',
              'treegrid',
              'froala-editor'
          ],
          profile: profile,
          environment: environment,
          treeshake: treeshake,
          browser: browser,
          watch: watch,
          verbose: verbose,
          inject: 'yes',
          intellishake: 'no'
        }),
        
        new CopyWebpackPlugin([{
            from: '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
            to: './webcomponents-bundle.js'
        }]),
        
        new CopyWebpackPlugin([{
            from: '../node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js.map',
            to: './webcomponents-bundle.js.map'
        }]),
        
        // Debug purposes only, injected via script: npm run-script buildexample -- --env.build_v=<full version here in format maj.min.patch.build>
        new webpack.DefinePlugin({
            BUILD_VERSION: JSON.stringify(build_v)
        }),

        // This causes infinite loop, so I can't use this plugin.
        //  new CopyWebpackPlugin([{
        //    from: __dirname + '/build/',
        //    to: __dirname + '/../sandbox-server/target/test1'
        //  }]),

        // Inline custom plugin - will copy to the target web app folder
        // 1. Run npm install fs-extra
        // 2. Fix the path, so that it copies to the server's build webapp folder
        {
          apply: (compiler) => {
            compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
              // Debugging
              console.log("########-------------->>>>> Finished Ext JS Compile <<<<<------------#######");

              let source = __dirname + '/build/';
              // TODO Set the path to your webapp build
              let destination = __dirname + '/../sandbox-server/target/sandbox';

              let options = {
                overwrite: true
              };
              fs.copy(source, destination, options, err => {
                if (err) return console.error(err)
                console.log('Copy build success!');
              })
            });
          }
        }
    ];
    return {
        mode: environment,
        devtool: (environment === 'development') ? 'source-map' : false,
        context: path.join(__dirname, './src'),
        //entry: './index.js',
        entry: {
        //    ewc:  './ewc.js',
            app: './index.js'
        },
        output: {
            path: path.join(__dirname, outputFolder),
            filename: '[name].js'
        },
        plugins: plugins,
        module: {
            rules: [
                { test: /\.(js)$/, exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        // 'eslint-loader'
                    ]
                },
                { test: /\.(html)$/, use: { loader: 'html-loader' } },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        performance: { hints: false },
        stats: 'none',
        optimization: { noEmitOnErrors: true },
        node: false
    };
};
