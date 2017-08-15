var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('minificarCss', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(minifyCSS())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('sass', function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(sass().on('error', sass.logError))
		   .pipe(minifyCSS())
		   .pipe(gulp.dest('./dist/css'));
});

gulp.task('htmlmin', function(){
	return gulp.src('./source/*.html')
		   .pipe(htmlmin({collapseWhitespace: true}))
		   .pipe(gulp.dest('./dist/html'));
});

gulp.task('monitorar', function(){
	gulp.watch('./source/scss/*.scss',['minificarCss', 'sass']);
	gulp.watch('./source/*.html', ['htmlmin']);
});