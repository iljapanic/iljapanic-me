// MODULES

// Global
var browserSync = require('browser-sync');
var requireDir = require('require-dir');

// Gulp
var gulp = require('gulp');
var fileInclude	= require('gulp-file-include');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');
var watch = require('gulp-watch');



// VARIABLES

// Paths
var path = {

	publicDir: './',

	htmlDir: './html',
	html: './html/**/**/*.html',

	sassDir: './sass',
	sass: './sass/**/**/**/*.{sass,scss}',

	cssDir: './css',
	css: './css/**/**.css'

};



// GULP TASKS

// 'browser-sync'
//
// 	- spins up a local server

gulp.task('browser-sync', function() {

	browserSync.init({
		server: {
			baseDir: path.publicDir,
			open: 'local',
			host: 'localhost'
		}
	});

});



// 'sass'
// 
//	- compiles SASS into CSS
//	- creates SASS sourcemaps (for debugging)
//	- combines indetical media queries into a single one
// 	- adds vendor prefixes
//	- minifies the outputed CSS

gulp.task('sass', function () {

	return gulp.src(path.sass)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(minifyCSS({keepSpecialComments: '0'}))
		.pipe(gulp.dest(path.cssDir))
		.pipe(browserSync.reload({stream:true}))

});


// 'watch'
//
//	- watches for changes in files
//	- runs appropriate task when changes are detected
//	- reloads browserSync

gulp.task('watch', ['browser-sync'], function() {

	watch(path.sass, function() { gulp.start('sass'); });

});




// 'default'
//
//	- default set of tasks that are triggered after running 'gulp'

gulp.task('default', ['sass', 'watch']);
