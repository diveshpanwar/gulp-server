var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minifier = require('gulp-minifier');


gulp.task('minify', function() {
  return gulp.src('app/**/*').pipe(minifier({
    minify: true,
    minifyJS: true,
    minifyCSS: true
  })).pipe(gulp.dest('dist'));
})

gulp.task('server',  function() {
  gulp.src('dist').pipe(webserver({
    livereload: true,
    directoryListing: false,
    open: true
  }));
});

gulp.task('watch', function() {
  gulp.watch('app/**/*', gulp.series('minify'));
})

gulp.task('default', gulp.parallel([gulp.series(['minify', 'server']), 'watch']));
