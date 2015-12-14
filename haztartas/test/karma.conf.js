module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/common/bower_components/angular/angular.js',
      'public/common/bower_components/angular-route/angular-route.js',
      'public/common/bower_components/angular-animate/angular-animate.js',
      'public/common/bower_components/angular-mocks/angular-mocks.js',
      'public/common/bower_components/angular-material/angular-material.js',
      'public/app2.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};