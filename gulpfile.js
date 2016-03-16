var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')

gulp.task('sass', function() {
  return gulp.src('style/scss/*.scss')
   .pipe(sass())
   .on('error', sass.logError)
   .pipe(gulp.dest('style/css/'))
   //.pipe(browserSync.reload({stream: true}));
});

gulp.task("babels", function () {
  return gulp.src("js/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('build', function () {
    return browserify({entries: 'js/app2.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    return browserify('./js/app2.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('bundle.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./dist'));
})


gulp.task('default', [ 'sass', 'browserify']);
