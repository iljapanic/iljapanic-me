const browserSync = require('browser-sync');
const config = require('../config');
const fs = require('fs');
const gulp = require('gulp');
const handleErrors = require('../lib/handleErrors');
const path = require('path');

const includeTask = function () {
	return gulp.src([config.include.src], {dot: true})
		.pipe(gulp.dest(config.include.dest))
		.pipe(browserSync.stream())
}

gulp.task('include', includeTask)
module.exports = includeTask
