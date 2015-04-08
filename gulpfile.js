/**
gulp commands
dist - 
watch - 
optimize -
*/

var gulp = require('gulp');
var del = require('del');

var stylus = require('gulp-stylus');
var jade = require('gulp-jade');

//var coffee = require('gulp-coffee');
//var uglify = require('gulp-uglify');
//var minifycss = require('gulp-minify-css');
//var minifyhtml = require('gulp-minify-html');
//var imagemin = require('gulp-imagemin');
//var autoprefixer = require('gulp-autoprefixer');


//var browserSync = require('browser-sync');
var plugins = require('gulp-load-plugins')();

var app_dir = {
    src: __dirname + "/src/",
    tests: __dirname + "/tests/",
    dist: __dirname + "/dist/",
    css: "**/*.css",
    js: "**/*.js",
    images: "app/images",
    html: "**/*.htm"
};

//Default gulp task
gulp.task('default', function() {
    console.log(app_dir.src);
    // place code for your default task here
});

//gulp dist-delete
gulp.task('dist-delete', function(cb) {
    console.log(">>>>>>>> deleting");
    del([app_dir.dist + '**'], cb)
});




/*********Distributable************/

gulp.task('dist-copy-clean', function() {
    console.log(">>>>>>>> cleaning up the dist folder");
    //ignore jade, styl, and css inside the js folder
    return gulp.src([app_dir.src + '**', '!' + app_dir.src + '**/*.jade', '!' + app_dir.src + '**/*.styl', '!' + app_dir.src + 'app/js/*.css'])
        .pipe(gulp.dest(app_dir.dist))
});

gulp.task('dist-minify-css', function() {
    console.log("minifying CSS");
    return gulp.src(app_dir.dist + app_dir.css)
        .pipe($.minifyCss())
        .pipe(gulp.dest(app_dir.dist))
});

gulp.task('dist-uglify-js', function() {
    console.log(">>>>>>>> Uglifying JS");
    return gulp.src(app_dir.dist + app_dir.js)
        .pipe($.uglify())
        .pipe(gulp.dest(app_dir.dist))
});

gulp.task('dist-minify-html', function() {
    console.log(">>>>>>>> Minifying HTML");
    var opts = {
        comments: true,
        spare: true
    };
    return gulp.src(app_dir.src + app_dir.html)
        .pipe(minifyhtml(opts))
        .pipe(gulp.dest(app_dir.dist))
});

gulp.task('dist-minify-image', function() {
    console.log(">>>>>>>> Minifying Images");
    return gulp.src(app_dir.src + app_dir.images + "/**/*")
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(app_dir.dist + app_dir.images))
});

gulp.task('dist-compile-coffee', function() {
    console.log(">>>>>>>> Compile Coffeescript");
    return gulp.src(app_dir.tests + "**/*.coffee") // path to your file
        .pipe(coffee())
        .pipe(gulp.dest(app_dir.tests));
});

gulp.task('dist', ['dist-minify-css', 'dist-uglify-js', 'dist-minify-html', 'dist-minify-image', 'dist-compile-coffee']);



/*********Watch************/



gulp.task('compile-jade', function() {
    return gulp.src(app_dir.src + '**/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(app_dir.src))
});

gulp.task('compile-stylus', function() {
    console.log("COMPILING");
    return gulp.src(app_dir.src + '**/*.styl')
        .pipe(stylus({
            errors: true,
            pretty: true
        }))
        .pipe(gulp.dest(app_dir.src))
});

gulp.task('autoprefix-css', ['compile-stylus'], function() {
    console.log("AUTO PREFIXING");
    return gulp.src(app_dir.src + '**/*.css')
        .pipe(autoprefixer(["last 2 versions"], {
            cascade: true
        }))
        .pipe(gulp.dest(app_dir.src))
});

gulp.task('watch', function() {
    // watch jade and style
    gulp.watch(app_dir.src + '**/*.jade', ['compile-jade']);
    gulp.watch(app_dir.src + '**/*.styl', ['autoprefix-css']);
});