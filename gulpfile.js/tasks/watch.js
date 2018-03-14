const config = require('../config');
const gulp = require('gulp');
const watch = require('gulp-watch');

const watchTask = function() {
	watch(config.data.watch, function() { gulp.start('jekyll-rebuild'); });
	watch(config.css.watch, function() { gulp.start('css'); });
	watch(config.js.watch, function() { gulp.start('js'); });
  watch([config.images.watch], function() { gulp.start('images'); });
  watch([config.books.watch], function() { gulp.start('images'); });
  watch(config.jekyll.watch, function() { gulp.start('jekyll-rebuild'); });
}

gulp.task('watch', ['browserSync'], watchTask)
