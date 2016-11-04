const source = require('./build-config.js');

const gulp = require('gulp');
const gutil = require('gulp-util');
const htmlmin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const uglifyJS = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const runsequence = require('run-sequence');
const imagemin = require('gulp-imagemin');
const removeCode = require('gulp-remove-code');
const inject = require('gulp-inject-string');

gulp.task('default', function() {
	return gutil.log("lets melt things down...");
});

gulp.task('build', function() {
	//////////
	// html //
	//////////
	gutil.log("BUILDING HTML FILES");
	source.html.forEach(function(item) {
		gulp.src(item.src)
			.pipe(inject.replace('<!-- bundled css comes here -->', '<link rel="stylesheet" href="' + item.bundled_css_destination + '">'))
			.pipe(removeCode({ production: true }))
			.pipe(htmlmin({
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeOptionalTags: true
			}))
			.pipe(gulp.dest(item.dest));
	});

	/////////
	// css //
	/////////
	gutil.log("BUILDING CSS FILES");
	source.css.forEach(function(item) {
		gulp.src(item.src)
			.pipe(concatCss("bundled.css"))
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(cleanCss())
			.pipe(gulp.dest(item.dest));
	});

	////////
	// js //
	////////
	gutil.log("BUILDING JS FILES");
	source.js.forEach(function(item) {
		gulp.src(item.src)
			.pipe(uglifyJS())
			.pipe(gulp.dest(item.dest));
	});

	//////////////////////
	// minifying images //
	/////////////////////////
	gutil.log("MINIFYING IMAGES");
	source.images.forEach(function(item) {
		gulp.src(item.src)
			.pipe(imagemin())
			.pipe(gulp.dest(item.dest));
	});

	////////////////////////////
	// handling ignored files //
	////////////////////////////
	gutil.log("Copying impotant files");
	source.ignored.forEach(function(item) {
		gulp.src(item.src)
			.pipe(gulp.dest(item.dest));
	});
	gutil.log(" ");
	gutil.log(gutil.colors.yellow('*********************************************************'));
	gutil.log(gutil.colors.yellow("** "), "Install dependencies with the following commands:", gutil.colors.yellow(" **"));
	gutil.log(gutil.colors.yellow("** "), gutil.colors.green("cd build"), gutil.colors.yellow("                                          **"));
	gutil.log(gutil.colors.yellow("** "), gutil.colors.green("bower Install"), gutil.colors.yellow("                                     **"));
	gutil.log(gutil.colors.yellow('*********************************************************'));
	gutil.log(" ");
	gutil.log(gutil.colors.bgBlue(" a day without sunshine is like, you know, "),gutil.colors.bgBlack(" night. "));
	gutil.log(" ");
});
