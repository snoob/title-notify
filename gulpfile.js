var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('default', function() {
  gulp.src('js/title-notify.js')
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist'))
});