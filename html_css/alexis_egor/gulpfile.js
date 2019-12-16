const gulp = require ('gulp'),
     sass = require ('gulp-sass'),
     clean = require ('gulp-clean'),
     autoprefixer = require ('gulp-autoprefixer'),
     rename = require('gulp-rename'),
     cleancss = require('gulp-clean-css'),
     watch = require('gulp-watch'),
     browserSync=require('browser-sync'),
     reload=browserSync.reload;
var path = {
    build: {//готові файли
        html: './',
        js: 'build/js',
        css: 'build/css',
        img: 'build/img',
        fonts: 'build/fonts'
    },
    src:{// вихідні дані
        html: 'src/*.html',
        js: 'src/js/main.js',
        sass: 'src/sass/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch:{//шляхи стеження 
        html:'src/**/*.html',
        js: 'src/js/**/*.js',
        sass: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};
const config = {
    server: {
        baseDir: './'
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
};
gulp.task('webserver', function(){
    browserSync(config);
});
gulp.task ('clean', function(){
    return gulp.src(['index.html','build' ], {read: false})
    .pipe(clean());
});
gulp.task ('html', function(){
    return gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}))
});
gulp.task ('sass', function(){
    return gulp.src (path.src.sass)
    .pipe (sass().on('error',sass.logError))
    .pipe (autoprefixer())
    .pipe (sass())
    .pipe (gulp.dest (path.build.css))
    .pipe (cleancss())
    .pipe (rename('main.min.css'))
    .pipe (gulp.dest(path.build.css))
    .pipe(reload({stream:true}))
});
gulp.task ('js', function(){
    return gulp.src(path.src.js)
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}))
});
gulp.task ('img', function(){
    return gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({stream: true}))
});
gulp.task ('fonts', function(){
    return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(reload({stream: true}))
});
gulp.task ('watch', function(){
   gulp.watch(path.watch.html,['html']);
   gulp.watch(path.watch.sass,['sass']);
   gulp.watch(path.watch.js,['js']);
   gulp.watch(path.watch.fonts,['fonts']);
   gulp.watch(path.watch.img,['img']);

});
gulp.task('build',['html','sass','js','img','fonts']);
gulp.task('default',['build','webserver','watch']);