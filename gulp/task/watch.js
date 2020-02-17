let gulp = require('gulp');
let watch = require('gulp-watch');
let browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src'
    }
  });

  watch('./src/index.html', () => {
    browserSync.reload();
  });

  watch('./src/assets/styles/**/*.css', gulp.series(['styles', 'cssInject']));

  watch('./src/assets/scripts/**/*.js', gulp.series([ 'scripts' ,'scriptsRefresh']));
});

gulp.task('cssInject', function() {
  return gulp.src('./src/temp/styles/styles.css', {allowEmpty: true})
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function(){
  browserSync.reload();
})
