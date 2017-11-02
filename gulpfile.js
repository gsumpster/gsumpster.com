var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass');

gulp.task('serve', function() {
  connect.server({
    host: '0.0.0.0',
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['serve', 'watch']);
