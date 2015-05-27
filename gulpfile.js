var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = {
  jshint: {
    src: 'index.js',
    rcfile: '.jshintrc'
  },
  test: {
    src: 'test/**/*.js',
    option: {
      ui: 'bdd',
      reporter: 'dot'
    }
  }
};

gulp.task('jshint', function() {
  return gulp.src(config.jshint.src)
    .pipe(jshint(config.jshint.rcfile))
    .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  require('intelli-espower-loader');
  return gulp.src(config.test.src)
    .pipe(mocha(config.test.option));
});
