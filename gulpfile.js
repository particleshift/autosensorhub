var gulp = require('gulp');
var scss = require('gulp-scss');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');

gulp.task('scss', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('img', function() {
  return gulp.src('src/assets/*.+(png|jpg|svg)')
    .pipe(gulp.dest('dist/assets/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'scss', 'html', 'img'], function() {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/assets/**/*.*', ['img']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
});
