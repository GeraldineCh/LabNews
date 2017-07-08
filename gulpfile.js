var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

var config = {
	source:'./src/',
	dist: './public/'
};

var paths = {
	assets: "assets/",
	html: "**/*.html",
	sass: "scss/**/*.scss",
	mainSass: "scss/main.scss",
	fonts:"fonts",
	bootstrapFT:"fonts/bootstrap/*",
	js: "js/**/*.js",
	mainJS: "js/app.js",
	vendor:"js/vendor/*",
	bootstrapJS: "js/vendor/bootstrap/*",
	components:"js/components/*",
	img: "img/**/*.png",
    autor: "authors/*",
    noticias: "news/*"
};

var sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: config.source + paths.assets + paths.sass,
	js: config.source + paths.assets +paths.js,
	fonts:config.source + paths.fonts,
	bootstrapFT: config.source + paths.assets + paths.bootstrapFT,
	rootSass: config.source + paths.assets + paths.mainSass,
	rootJS: config.source + paths.assets + paths.mainJS,
	img: config.source + paths.assets + paths.img,
	vendor: config.source + paths.assets + paths.vendor,
	components: config.source + paths.assets + paths.components,
	bootstrap: config.source + paths.assets + paths.bootstrapJS,
    author: config.source + paths.assets + paths.img + paths.autor,
    news: config.source + paths.assets + paths.img + paths.noticias
};


gulp.task('vendor',function () {
	gulp.src(sources.vendor).pipe(gulp.dest(config.dist + paths.assets + "js/vendor"))
});

gulp.task('bootstrapJS',function () {
	gulp.src(sources.bootstrap).pipe(gulp.dest(config.dist + paths.assets + "js/vendor/bootstrap"))
});

gulp.task('img',function () {
	gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"))
});

gulp.task('autor',function () {
	gulp.src(sources.author).pipe(gulp.dest(config.dist + paths.assets + paths.img + "authors"))
});

gulp.task('noticias',function () {
	gulp.src(sources.news).pipe(gulp.dest(config.dist + paths.assets + paths.img + "news"))
});

gulp.task('fonts',function () {
	gulp.src(sources.fonts).pipe(gulp.dest(config.dist + paths.assets + "fonts"))
});

gulp.task('bootstrapFT',function () {
	gulp.src(sources.bootstrapFT).pipe(gulp.dest(config.dist + paths.assets + "fonts/bootstrap"))
});


gulp.task('html', function () {
	gulp.src(sources.html).pipe(gulp.dest(config.dist))
});

gulp.task("sass", function () {
	gulp.src(sources.rootSass)
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function () {
	gulp.src(sources.rootJS)
		//.pipe(concat(sources.rootJS)
		.pipe(browserify())
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('components',function () {
	gulp.src(sources.components).pipe(gulp.dest(config.dist + paths.assets + "js/components"))
});


gulp.task("sass-watch", ["sass"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("js-watch", ["js","components"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("html-watch", ["html"], function (done) {
	browserSync.reload();
	done();
});

gulp.task("serve", function () {
	browserSync.init({
		server: {
			baseDir: config.dist
		}
	});
	gulp.watch(sources.html, ["html-watch"]);
	gulp.watch(sources.sass, ["sass-watch"]);
	gulp.watch(sources.js, ["js-watch"]);
});

gulp.task('run', [ 'fonts','html-watch', 'js-watch', 'sass-watch','bootstrapFT','vendor', 'img', 'autor', 'noticias', 'components','bootstrapJS','serve']);