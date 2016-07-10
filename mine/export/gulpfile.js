// require packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var uglifyJS = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var uncss = require('gulp-uncss');

// setting variables for src
var src_html = '*.html';
var src_css = 'css/*.css';
var src_js = 'js/*.js';
var src_img = 'img/*';

// setting variables for dest
var dest_html = 'build/';
var dest_css = 'build/css/';
var dest_js = 'build/js/';
var dest_img = 'build/img/';

// default task
gulp.task('default', function() {
    return gutil.log("Gulp is running...");
});

// minify html -ok
gulp.task('htmlmin', function() {
    return gulp.src(src_html)
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
        .pipe(gulp.dest(dest_html));
});

// remove unused css
gulp.task('uncss', function() {
    return gulp.src(['css/bootstrap.css', 'css/grayscale.css'])
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest(dest_css));
});

// minify css -ok
gulp.task('clean-css', function() {
    return gulp.src(dest_css + '*.css')
        .pipe(cleanCss())
        .pipe(gulp.dest(dest_css));
});

// concatinate css -ok
gulp.task('concat-css', function() {
    return gulp.src(src_css)
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest(dest_css));
});

// autoprefixer
gulp.task('autoprefix', function() {
    return gulp.src(dest_css + '*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(dest_css));
});

// minify js
gulp.task('uglifyjs', function() {
    return gulp.src(src_js)
        .pipe(uglifyJS())
        .pipe(gulp.dest(dest_js));
});

// optimize img
gulp.task('imagemin', function() {
    return gulp.src(src_img)
        .pipe(imagemin())
        .pipe(gulp.dest(dest_img));
});

gulp.task('build', function(callback) {
    runSequence('htmlmin', ['concat-css', /*'uncss',*/ 'autoprefix', 'clean-css', 'uglifyjs'],
        'imagemin',
        function() {
            console.log('fine :) buid over.');
        });
});

gulp.task('dobuild', function() {
    gulp.src(src_html)
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
        .pipe(gulp.dest(dest_html));

    //css
    gulp.src(src_css)
        .pipe(concatCss("main.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(dest_css));

    //js
    gulp.src(src_js)
        .pipe(uglifyJS())
        .pipe(gulp.dest(dest_js));

    //img
    gulp.src(src_img)
        .pipe(imagemin())
        .pipe(gulp.dest(dest_img));
});
