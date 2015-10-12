var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var browserSync = require('browser-sync').create();

gulp.task('bundle',function(){
	
	var bundler=watchify(browserify({
			entries:['./src/my.jsx'],
			transform: [reactify],
			extensions: ['.jsx','.html'],
			debug : true,
			cache: {},
			packageCache:{},
			fullPaths:true
		}));

	function build(file){
		if(file) gutil.log('Recompiling' +file);
		return bundler
			.bundle()
			.on('error',gutil.log.bind(gutil,'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};

	build();
	bundler.on('update',build);
});

// Static Server + watching scss/html files
gulp.task('serve', ['bundle'], function() {

    browserSync.init({
			server:{
				baseDir:'/Applications/MAMP/htdocs/proj/'
			}
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("src/*.jsx").on('change', browserSync.reload);
});

gulp.task('default',['serve']);