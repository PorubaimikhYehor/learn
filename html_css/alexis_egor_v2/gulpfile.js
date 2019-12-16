const gulp = require ('gulp'),
  sass = require ('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require("gulp-rename"),
  cleanCSS = require('gulp-clean-css'),
  rigger = require('gulp-rigger'),
  plumber = require('gulp-plumber'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  notify = require('gulp-notify'),

  browserSync = require ('browser-sync'),
  reload = browserSync.reload;


const config = {
  server: {
      baseDir: './build'
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
};

gulp.task('webserver', function(){
    browserSync(config);
});

gulp.task('clean', function() {
  return gulp.src('./build')
  .pipe(clean())
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(reload({stream:true}))
});

gulp.task('html',function() {
  return gulp.src('./src/index.html')
  .pipe(rigger())
  .pipe(plumber())
  .pipe(plumber.stop())
  .pipe(gulp.dest('build'))
  .pipe(reload({stream:true}))
});

gulp.task('js', function() {
  gulp.src('src/js/main.js')
  .pipe(rigger())
  .pipe(plumber({errorHandler:
    notify.onError(function (err) {
      return {
          title: 'js',
          message: err.message
      };
    })
  }))
  .pipe(uglify('main.js', {
    outSourceMap: true
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(reload({stream: true}))
});


gulp.task('img', function() {
  return gulp.src('./src/img/**/*.*')
  .pipe(gulp.dest('./build/img'))
  .pipe(reload({stream:true}))
});

gulp.task('fonts', function() {
  return gulp.src('./src/fonts/**/*.*')
  .pipe(gulp.dest('./build/fonts'))
  .pipe(reload({stream:true}))
});


gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.html', ["html"]);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/fonts/**/*/*', ['fonts']);
  gulp.watch('./src/img/**/*/*', ['img']);
});

gulp.task('build',['html', 'sass', 'img', 'fonts','js']);
gulp.task('default', ['webserver', 'build', 'watch']);