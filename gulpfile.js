var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require("gulp-watch"),
    path = require("path");

gulp.task("watch", function() {
    gulp.src(__dirname)
        .pipe(watch(path.join(__dirname, "index.html")))
        .pipe(watch(path.join(__dirname, "/css")))
        .pipe(livereload());
});

gulp.task('develop', function () {
    livereload.listen();
    //setTimeout(function () {
    //            livereload.changed('/');
    //       }, 500);
});

gulp.task('default', [
    "watch",
    'develop'
]);
