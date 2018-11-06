'use strict';

let gulp = require('gulp');
let typescript = require('gulp-typescript');
let cssnano = require('cssnano');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let precss = require('precss');
let sourcemaps = require('gulp-sourcemaps');
let imagemin = require('gulp-imagemin');
let ext_replace = require('gulp-ext-replace');

let tsProject = typescript.createProject('.tsconfig.json');

let assetsDevLocation = './dev/client/assets/';
let assetsProductionLocation = './';

let appDevLocation = './dev/client/';
let appProductionLocation = './app/';

gulp.task('build-css', () => {

    return gulp.src(assetsDevLocation + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProductionLocation + 'css/'));

});

gulp.task('build-ts', () => {

    return gulp.src(appDevLocation + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProductionLocation));

});

gulp.task('build-templates',  () => {

    return gulp.src(appDevLocation + 'templates/**/*.html').pipe(gulp.dest(appProductionLocation + 'templates/'));

});


gulp.task('copy-index',  () => {

    return gulp.src(appDevLocation + 'index.html').pipe(gulp.dest('./'));

});


gulp.task('build-img', () => {

    return gulp.src(assetsDevLocation + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProductionLocation + 'img/'));

});

gulp.task('watch', () => {

    gulp.watch(appDevLocation + '**/*.ts', ['build-ts']);
    gulp.watch(appDevLocation + 'templates/**/**/*.html', ['build-templates']);
    gulp.watch(assetsDevLocation + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDevLocation + 'img/*', ['build-img']);

});


gulp.task('default', ['copy-index', 'watch', 'build-ts', 'build-css', 'build-templates']);
