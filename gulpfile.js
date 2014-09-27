var gulp 		= require('gulp');
var browserSync = require('browser-sync');
var sass 		= require('gulp-ruby-sass');
var reload 		= browserSync.reload;
var baseDir		= './';

gulp.task('sass', function() {
  return gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles'))
    .pipe(reload({ stream:true }));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: baseDir
    }
  });
  gulp.watch('styles/*.scss', ['sass']);
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: baseDir}, reload);
});