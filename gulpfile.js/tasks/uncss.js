var config = require('../config')

var gulp = require('gulp')
var handleErrors = require('../lib/handleErrors')
var path = require('path')
var uncss = require('gulp-uncss')

var uncssTask = function () {
  return gulp.src('./dist/assets/css/style.css')
    .pipe(uncss({
      html: ['./dist/index.html', './dist/hire/index.html', './dist/projects/index.html', './dist/resume/index.html', './dist/bookshelf/index.html']
    }))
    .pipe(gulp.dest('./dist/assets/uncss/'))
}

gulp.task('uncss', uncssTask)
module.exports = uncssTask
