var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: '',
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
                extensions: ['', '.js', '.ts'],
                modulesDirectories: ['src', 'node_modules']
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
