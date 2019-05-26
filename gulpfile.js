var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function(){
	connect.server({
      root: '',
      livereload: true,
      port: 8080
  });
});

gulp.task('default', gulp.series('connect'));