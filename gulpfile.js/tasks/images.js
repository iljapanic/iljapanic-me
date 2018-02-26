const browserSync = require('browser-sync');
const config = require('../config');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const imagemin = require('gulp-imagemin');


const imagesTask = function () {
	return gulp.src([config.images.src])
		.pipe(imagemin())
		.on('error', handleErrors)
		.pipe(gulp.dest(config.images.dest))
		.pipe(browserSync.stream())
};

gulp.task('images', ['books'], imagesTask);
