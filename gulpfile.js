/////////////////////
// MODULES IMPORT //
///////////////////

// Generic
var browserSync = require('browser-sync');
var requireDir = require('require-dir');


// Gulp
var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cmq = require('gulp-combine-media-queries');
var fileinclude	= require('gulp-file-include');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var watch = require('gulp-watch');


    

////////////////////////
// PROJECT VARIABLES //
//////////////////////

// Paths
var path = {

	publicDir: './',

	assetsDir: './assets',

	htmlDir: './_html',
	html: './_html/**/**/*.html',

	sassDir: './_sass',
	sass: './_sass/**/**/**/*.{sass,scss}',

	cssDir: './assets/css',
	css: './assets/css/**/**.css'

};



//////////////////////////////
// GULP - FUNCTIONAL TASKS //
////////////////////////////

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
//	- creates SASS sourcemaps for easier debugging
// 	- adds vendor prefixes
//	- combines indetical media queries
//	- minifies the CSS

gulp.task('sass', function () {

	return gulp.src(path.sass)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
        }))
        .pipe(cmq())
		.pipe(minifyCSS({keepSpecialComments: '0'}))
		.pipe(gulp.dest(path.cssDir))
		.pipe(browserSync.reload({stream:true}))

});


// 'html'
//
//	- includes all the HTML files and exports them to root
//	- concats JS files based on building blocks in HTML

gulp.task('html', function() {
	
	var concat = useref.assets();

	return gulp.src(path.html)
		.pipe(plumber())
  		.pipe(fileinclude())
  		.pipe(concat)
  		.pipe(gulpif('*.js', uglify()))
        .pipe(concat.restore())
        .pipe(useref())
		.pipe(gulp.dest(path.publicDir))
  		.pipe(browserSync.reload({stream:true}));

});


//////////////////////////////
// GULP - GLOBAL TASKS //
////////////////////////////


// 'watch'
//
//	- watches for changes in files
//	- runs appropriate task when changes are detected
//	- reloads browserSync

gulp.task('watch', ['browser-sync'], function() {

	watch(path.sass, function() { gulp.start('sass'); });
	watch(path.html, function() { gulp.start('html'); });

});


// 'default'
//
//	- default set of tasks that are triggered after running 'gulp'

gulp.task('default', ['sass', 'html', 'watch']);
