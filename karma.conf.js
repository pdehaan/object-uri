var path = require('path');

module.exports = function(config) {

    config.set({

        basePath: '.'
        ,
        frameworks: ['mocha', 'chai']
        ,
        files: [
            './build/index.js',
            'test/main.js'
        ]
        ,
        preprocessors: {
        }
        ,
        reporters: ['progress']
        ,
        autoWatch: false,

        browsers: ['PhantomJS'],//PhantomJS,Chrome

        singleRun: true,
        
        browserNoActivityTimeout: 60000

    });
};