var
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  del = require('del'),
  vinyl = require('vinyl-paths'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  svgmin = require('gulp-svgmin');


const paths = {
    baseDir: './',
    sourceHTML: 'index.html',
    sourceJS: './src/**/*.js',
    sourceSCSS: './src/allineed/allineed.scss',
    watchSCSS: ['./src/allineed/core/*.scss', './src/allineed/core/components/*.scss', './src/allineed/modules/**/*.scss'],
    srcImages: './src/images/**',
    srcFonts: './src/fonts/**/*',
    dest: './',
    destImages: './dist/assets/images/',
    destFonts: './dist/assets/fonts/',
    destCSS: './dist/assets/css/'
  },
  PRESETS = ['es2015'],
  SOURCES = [paths.sourceHTML],
  OUTPUT_STYLE = 'expanded',
  CLEAN_READ = false,
  BABEL_STEAM = true;

var modules = [
  {
    name: 'allineed-panel-info',
    sourceSCSS: './src/allineed/modules/allineed-panel-info/ain-panel-info.scss',
    destCSS: './src/allineed/modules/allineed-panel-info/'
  },{
    name: 'allineed-sidebar',
    sourceSCSS: './src/allineed/modules/allineed-sidebar/ain-sidebar.scss',
    destCSS: './src/allineed/modules/allineed-sidebar/'
  }
]

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: paths.baseDir
    }
  })
})

gulp.task('dist', function () {
  return gulp.src(SOURCES)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', function () {
  gulp.watch(paths.sourceHTML, ['dist'])
  gulp.watch(paths.sourceJS, ['babel'])
  gulp.watch(paths.watchSCSS, ['sass'])
})

gulp.task('clean', function () {
  return gulp.src(paths.dest, { read: CLEAN_READ })
    .pipe(vinyl(del))
})

gulp.task('fonts', function () {
  return gulp.src(paths.srcFonts)
    .pipe(gulp.dest(paths.destFonts));
})

gulp.task('images', function () {
  return gulp.src(paths.srcImages)
    .pipe(gulp.dest(paths.destImages));
})

gulp.task('sass', function () {
  gulp.src(paths.sourceSCSS)
    .pipe(sass({
      outputStyle: OUTPUT_STYLE
    }))
    .pipe(gulp.dest(paths.destCSS))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.destCSS))
})

gulp.task('sass-modules', function () {
  modules.forEach(function (module) {
    gulp.src(module.sourceSCSS)
      .pipe(sass({
        outputStyle: OUTPUT_STYLE
      }))
      .pipe(gulp.dest(module.destCSS))
      .pipe(minifycss())
      .pipe(gulp.dest(module.destCSS))
  })
})


gulp.task('default', ['dist', 'browserSync', 'sass', 'sass-modules', 'fonts', 'images', 'watch'])
gulp.task('compile', ['dist', 'sass', 'sass-modules', 'fonts', 'images'])
