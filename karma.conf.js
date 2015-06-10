module.exports = function (config) {
  config.set({
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    frameworks: ['mocha'],
    singleRun: false,
    autoWatch: true,
    colors: true,
    reporters: ['dots'],
    browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
    files: [
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'bower_components/sinon-1.15.0/index.js',
      'node_modules/chai/chai.js',
      'bower_components/sinon-chai/lib/sinon-chai.js',

      'angular-notification.js',
      'test/*.js'
    ],
    logLevel: config.LOG_ERROR
  });
};
