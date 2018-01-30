// load dependencies
const browserify		= require('browserify');
const browserSync 	= require('browser-sync').create();
const buffer 				= require('vinyl-buffer');
const child 				= require('child_process');
const del 					= require('del');
const gcmq 					= require('gulp-group-css-media-queries');
const gulp 					= require('gulp');
const gutil 				= require('gulp-util');
const htmlmin 			= require('gulp-htmlmin');
const htmllint			= require('gulp-htmllint');
const imagemin			= require('gulp-imagemin');
const imageresize		= require('gulp-image-resize');
const jimp					= require('gulp-jimp');
const nano 					= require('gulp-cssnano');
const notify 				= require('gulp-notify');
const optimizejs 		= require('gulp-optimize-js');
const postcss 			= require('gulp-postcss');
const shell 				= require('gulp-shell');
const source 				= require('vinyl-source-stream');
const sourcemaps 		= require('gulp-sourcemaps');
const stylus				= require('gulp-stylus');
const uglify 				= require('gulp-uglify');

// PostCSS
const cssNext 				= require('postcss-cssnext');
const cssLost					= require('lost');


// error handler
function handleErrors() {
	var args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
};


// styles
gulp.task('styles', function() {
	// PostCSS configuration
	var processors = [
		cssLost,
		cssNext({
			'browsers': ['last 12 versions'],
			'features': {
				'customProperties': {
					preserve: true,
					appendVariables: true
				},
				'colorFunction': true,
				'customSelectors': true,
				'sourcemap': true,
				'rem': false
			},
		})
	];

	return gulp.src(['./src_assets/css/style.styl'])
	.pipe(sourcemaps.init())
	.pipe(stylus())
	.on('error', handleErrors)
	.pipe(postcss(processors))
	.on('error', handleErrors)
	.pipe(gcmq())
	.on('error', handleErrors)
	.pipe(nano({discardComments: {removeAll: true}}))
	.on('error', handleErrors)
	.pipe( sourcemaps.write('.') )
	.pipe(gulp.dest('./assets/css'))
	browserSync.reload;
});

// scripts
gulp.task('scripts', ['scripts:vendor'], function() {

	var b = browserify({
		entries: ['./src_assets/js/app.js'],
		debug: true
	});

	return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(optimizejs())
		.on('error', handleErrors)
		.pipe(uglify())
		.on('error', handleErrors)
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./assets/js'))
		browserSync.reload;
});

gulp.task('scripts:vendor', function() {
	return gulp.src(['./src_assets/js/vendor/echo.js'])
		.pipe(optimizejs())
		.on('error', handleErrors)
		.pipe(uglify())
		.on('error', handleErrors)
		.pipe(gulp.dest('./assets/js/vendor'))
});

// images
gulp.task('images', function() {
	return gulp.src(['./src_images/**/*.{png,gif,svg,jpeg,jpg,JPG,JPEG}'])
		.pipe(imagemin({verbose: true}))
		.on('error', handleErrors)
		.pipe(gulp.dest('./images'))
		browserSync.reload;
});

// resize books images
gulp.task('books', function() {
	return gulp.src(['./src_books/*.{png,gif,svg,jpeg,jpg,JPG,JPEG}'])
	.pipe(imageresize({
			imageMagick: true,
			width : 280, // max width
			crop : false,
			upscale : false
	}))
	.on('error', handleErrors)
	.pipe(gulp.dest('./src_images/books'))
});

// clean books
gulp.task('clean:books', function() {
	return del([
		'./src_images/books'
	])
});

// blur books images
gulp.task('books-blur', ['books'], function() {
	return gulp.src(['./src_images/books/*.{png,gif,jpeg,jpg,JPG,JPEG}'])
	.pipe(jimp({
		'': {
			blur: 10,
			resize: { width: 75 }
		}
	}))
	.on('error', handleErrors)
	.pipe(gulp.dest('./src_images/books-blur'))
});

// buildSite
gulp.task('buildSite', shell.task('jekyll build --incremental'));

// html
gulp.task('html', ['buildSite'], function() {
	return gulp.src('./_site/**/**/**/**/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.on('error', handleErrors)
		// .pipe(htmllint({}, htmllintReporter))
		// .on('error', handleErrors)
		.pipe(gulp.dest('_site'));
});

function htmllintReporter(filepath, issues) {
		if (issues.length > 0) {
				issues.forEach(function (issue) {
						gutil.log(gutil.colors.cyan('[gulp-htmllint] ') + gutil.colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + gutil.colors.red('(' + issue.code + ') ' + issue.msg));
				});

				process.exitCode = 1;
		}
}

// jekyll
gulp.task('jekyll-build', shell.task(['jekyll build --incremental --watch']));
gulp.task('jekyll-build-once', ['buildSite', 'html']);

gulp.task('jekyll-serve', function() {
	browserSync.init({
		server: {
			baseDir: '_site/'
		}
	});
	gulp.watch('./src_assets/css/**/**/**/*.styl', ['styles']);
	gulp.watch('./src_assets/js/**/**/**/*.js', ['scripts']);
	gulp.watch(['src_images/**/**/**/*', '!src_images/books/', '!src_images/books-blur/'], ['images']);
	gulp.watch('_site/**/**/**/*.*').on('change', browserSync.reload);
	gulp.watch('_data/**/**/**/*.json').on('change', browserSync.reload);
});

// group tasks
gulp.task('default', ['jekyll-build', 'jekyll-serve', 'styles', 'scripts', 'images']);
gulp.task('build', ['styles', 'jekyll-build-once']);
