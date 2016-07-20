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
    sourceHTML: './src/**/*.html',
    sourceJS: './src/**/*.js',
    sourceSCSS: './src/assets/scss/app.scss',
    watchSCSS: './src/assets/scss/*.scss',
    srcImages: './src/assets/images/**',
    srcFonts: './src/assets/fonts/**/*',
    dest: './build',
    destImages: './build/assets/images/',
    destFonts: './build/assets/fonts/',
    destCSS: './build/assets/css/'
  },
  PRESETS = ['es2015'],
  SOURCES = [paths.sourceHTML],
  OUTPUT_STYLE = 'expanded',
  CLEAN_READ = false,
  BABEL_STEAM = true;

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: paths.dest
    }
  })
})

gulp.task('build', function () {
  return gulp.src(SOURCES)
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', function () {
  gulp.watch(paths.sourceHTML, ['build'])
  gulp.watch(paths.sourceJS, ['babel'])
  gulp.watch(paths.watchSCSS, ['sass'])
})

gulp.task('clean', function () {
  return gulp.src(paths.dest, { read: CLEAN_READ })
    .pipe(vinyl(del))
})

gulp.task('babel', function () {
  return gulp.src(paths.sourceJS)
    .pipe(babel({
      presets: PRESETS
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({ stream: BABEL_STEAM }))
})

gulp.task('fonts', function () {
  return gulp.src(paths.srcFonts)
    .pipe(gulp.dest(paths.destFonts));
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


gulp.task('default', ['babel', 'build', 'browserSync', 'sass', 'fonts', 'watch'])
