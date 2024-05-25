'use strict';

var gulp = require('gulp');
var loadPlugins  = require('gulp-load-plugins')();
var browserSync  = require('browser-sync').create();


gulp.task('servers', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});


gulp.task('pug', function () {
  return gulp.src('dist/pug/*.pug')
    .pipe(loadPlugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest('build/'))
    .on('end', browserSync.reload);
});



gulp.task('scss', function () {
  return gulp.src('dist/scss/style.scss')
    .pipe(loadPlugins.sourcemaps.init())
    .pipe(loadPlugins.sass({outputStyle: 'expanded'}))
    .on("error", loadPlugins.notify.onError({
      title: "scss error"
    }))
    .pipe(loadPlugins.sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream:true
    }))
});


gulp.task('js',function(){
  return gulp.src('dist/js/*.js')
    .pipe(gulp.dest('build/js'));
});



gulp.task('img',function(){
  return gulp.src('dist/images/*.{png,jpg,gif,svg}')
    .pipe(gulp.dest('build/images'));
});



gulp.task('watch', function(){
  gulp.watch('dist/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('dist/scss/**/*.scss', gulp.series('scss'));
  gulp.watch('dist/js/*.js', gulp.series('js'));
  gulp.watch('dist/images/*.{png,jpg,gif,svg}', gulp.series('img'));
});


gulp.task('default', gulp.series(
  gulp.parallel('pug', 'scss', 'js', 'img'),
  gulp.parallel('watch', 'servers')
));
