var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var webpack     = require('gulp-webpack');
var config      = require('./webpack.config.js')


gulp.task("webpack", function(callback) {
    // run webpack
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback(); // should be reload
    });
});


// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });


    gulp.watch("*.html").on("change", ['refresh']);
    gulp.watch("../app/scss/*.scss").on("change", ['refresh']);
    gulp.watch("../app/js/*.js").on("change", ['refresh']);
});


gulp.task('refresh', ['webpack', 'reload']);

// defualt dev task
gulp.task('dev', ['serve']);

