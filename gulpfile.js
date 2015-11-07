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
        js: ['js/*.js', '!js/*.min.js'],
        sass: ['sass/*.scss']
    },
    dest: {
        js: './js',
        css: './css'
    }
};

/* JS */
gulp.task('js', ['cleanjs'], function(){
    // this construction makes it async, according to Gulp's docs.
    var stream = gulp.src(paths.src.js)
                     .pipe(sourcemaps.init())
                     .pipe(uglify())
                     .pipe(concat('hire-me.min.js'))
                     .pipe(sourcemaps.write())
                     .pipe(gulp.dest(paths.dest.js)) 
    return stream;
});

/* SASS */
gulp.task('sass', ['cleancss'], function(){
    var stream = gulp.src(paths.src.sass)
                     .pipe(sourcemaps.init())
                     .pipe(sass().on('error', sass.logError))
                     .pipe(concat('hire-me.css'))
                     .pipe(gulp.dest(paths.dest.css)) 
    return stream;
});

/* CLEANUP */
gulp.task('cleanjs', function(cb){
    var stream = del('js/hire-me.min.js', cb);
    return stream;
});
gulp.task('cleancss', function(cb){
    var stream = del('css/hire-me.css', cb);
    return stream;
});

/* WATCH */
gulp.task('watch', function(){ 
    gulp.watch('js/*.js', ['cleanjs', 'js']);
    gulp.watch('sass/*.scss', ['cleancss', 'sass']);
});

gulp.task('default', ['cleanjs', 'cleancss', 'js', 'sass', 'watch']);

