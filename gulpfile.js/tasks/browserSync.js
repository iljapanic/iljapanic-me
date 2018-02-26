const browserSync = require('browser-sync')
const config = require('../config')
const gulp = require('gulp')

gulp.task('browserSync', ['assets', 'jekyll-build'], function () {
  browserSync.init({
    server: {
      baseDir: config.publicDir
    }
  })
});
