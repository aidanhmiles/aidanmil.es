var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'); 

var paths = {
    src: {
        js: ['js/*.js'],
        sass: ['sass/*.scss']
    },
    dest: {
        js: './',
        css: './'
    }
};

/* JS */
gulp.task('js', function(){
    return gulp.src(paths.src.js)
               .pipe(sourcemaps.init())
               .pipe(uglify())
               .pipe(concat('hire-me.min.js'))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest(paths.dest.js)) 
});

/* SASS */
gulp.task('sass', function(){
    return gulp.src(paths.src.sass)
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError))
               .pipe(concat('hire-me.css'))
               .pipe(gulp.dest(paths.dest.css)) 
});

/* WATCH */
gulp.task('watch', function(){ 
    gulp.watch('js/*.js', ['concat', 'uglify']);
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch']);
