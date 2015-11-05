/* dependencies */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    del = require('del');

/* paths catalog */
var paths = {
    src: {
        js: ['js/*.js'],
        sass: ['sass/*.scss']
    },
    dest: {
        js: './js',
        css: './css'
    },
    generatedFiles: ['css/hire-me.css', 'js/hire-me.min.js']
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

/* CLEANUP */
gulp.task('clean', function(){
    return del(paths.generatedFiles);
});

/* WATCH */
gulp.task('watch', function(){ 
    gulp.watch('js/*.js', ['js']);
    gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['clean', 'js', 'sass', 'watch']);
