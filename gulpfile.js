var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
//var watchify = require('watchify');
var concat=require('gulp-concat');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var minifyCss = require('gulp-minify-css');

gulp.task('bundle',function(){
	
	var bundler=browserify({
			entries:['./src/jsx/my.jsx'],
			transform: [reactify],
			extensions: ['.jsx','.html'],
			debug : true,
			cache: {},
			packageCache:{},
			fullPaths:true
		});

	function build(file){
		console.log('file updated');
		if(file) gutil.log('Recompiling' +file);
		return bundler
			.bundle()
			.on('error',gutil.log.bind(gutil,'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./build/'))
	};

	build();
	bundler.on('update',build);

});


var cssify = ['cssify'];
var bundle = ['bundle'];

gulp.task('cssify',function(){
	return gulp.src('./src/css/*.css')
		.pipe(minifyCss())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./build/'))
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
			server:{
				baseDir:'/Applications/MAMP/htdocs/proj/'
			}
    });

    gulp.watch('*.html',browserSync.reload);
    gulp.watch('./src/**/*.jsx',bundle);
    gulp.watch('./src/**/*.css',cssify);
    gulp.watch('build/main.js',browserSync.reload);
    gulp.watch('build/main.css',browserSync.reload);
});

gulp.task('default',['bundle','cssify','serve']);