var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');

var paths = {
  sass: ['./scss/**/*.scss'],
  templatecache: ['./www/app/**/*.html'],
  ng_annotate: ['./www/app/**/*.js'],
  useref: ['./www/*.html']
};

gulp.task('default', ['useref']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

/** Transform html templates into angular templates **/
gulp.task('templatecache', function (done) {
  gulp.src('./www/app/**/*.html')
      .pipe(templateCache({root: 'app', standalone:true}))
      .pipe(gulp.dest('./www/dist'))
      .on('end', done);
});

/** Add injections using "@ngInject" **/
gulp.task('ng_annotate', ['templatecache'], function (done) {
  gulp.src('./www/app/**/*.js')
      .pipe(ngAnnotate({single_quotes: true}))
      .pipe(gulp.dest('./www/dist/app'))
      .on('end', done);
});

/** Concatenate js and css files **/
gulp.task('useref', ['sass', 'ng_annotate'], function (done) {
  var assets = useref.assets();
  gulp.src('./www/*.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(gulp.dest('./www/dist'))
      .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.templatecache, ['templatecache']);
  gulp.watch(paths.ng_annotate, ['ng_annotate']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
