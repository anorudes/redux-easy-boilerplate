var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: 'src',
        singleRun: true,
        frameworks: ['mocha'],
        reporters: ['dots'],
        browsers: ['Chrome'],
        files: [
            'test/**/*.js'
        ],
        preprocessors: {
            'test/**/*.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.js', '.ts']
            },
            module: {
                loaders: [
                  { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackMiddleware: {
            stats: {
                color: true,
                chunkModules: false,
                modules: false
            }
        }
    });

};
