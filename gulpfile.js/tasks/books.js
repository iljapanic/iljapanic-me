const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const imagemin = require('gulp-imagemin');
const imageresize = require('gulp-image-resize');

gulp.task('books', function() {
	return gulp.src([config.books.src])
	.pipe(imageresize({
		imageMagick: true,
		width : 280, // max width
		crop : false,
		upscale : false
	}))
  .on('error', handleErrors)
  .pipe(imagemin())
  .on('error', handleErrors)
	.pipe(gulp.dest(config.books.dest))
});
