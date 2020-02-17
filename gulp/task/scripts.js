const gulp = require('gulp'),
      webpack = require('webpack');

gulp.task('scripts', (callback) => {
  webpack(require('../../webpack.config'), (err, stats) => {
    if(err){
      console.log(err.toString());
    }else{
      console.log(stats.toString());
    }
    callback();
  });
});

