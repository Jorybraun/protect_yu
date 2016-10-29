var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
 
gulp.task('babel', function() {
    return gulp.src('./app/wrk/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./app/wrk/scss/main.scss')
                .pipe(sass())
                .pipe(gulp.dest('./app/dist/css/'))
                .pipe(autoprefixer())
                .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("app/wrk/scss/*.scss", ['sass']);
    gulp.watch("app/wrk/js/app.js", ['babel']);
    gulp.watch("app/*.html").on('change', bs.reload);
});

gulp.task('default', ['watch']);