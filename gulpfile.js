const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const webConfig = {
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

gulp.task('default', function() {
  browserSync.init({
    proxy: "http://localhost:8000",
  });
  gulp.watch("vivid/static/home/sass/**/*.scss", function () {
    return gulp.src("vivid/static/home/sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        overrideBrowserslist: ['> 0.1%'],
        cascade: false
      }))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(gulp.dest("vivid/static/home/css"))
      .pipe(browserSync.stream());
  });
  gulp.watch("vivid/static/home/js/**/*.js", function () {
    return gulp.src("vivid/static/home/js/index.js")
      .pipe(webpack(webConfig))
      .pipe(gulp.dest("vivid/static/home/buildjs"))
      .pipe(browserSync.stream());
  });
  gulp.watch("vivid/vivid/templates/**/*.html").on('change', browserSync.reload);
});