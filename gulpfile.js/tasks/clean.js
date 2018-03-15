const del = require('del');
const gulp = require('gulp');

gulp.task('clean', function() {
  return del([
    '_site',
    'images',
    'assets',
    'favicon-32x32.png',
    'favicon-16x16.png',
    'favicon.ico'
  ]);
});
