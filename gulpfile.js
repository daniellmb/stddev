/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using gulp
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    jshint = require('gulp-jshint'),
    complexity = require('gulp-complexity'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    karma = require('gulp-karma'),
    fs = require('fs'),
    source = 'stddev.js',
    sourceMin = 'stddev.min.js',
    specs = 'test/spec/*.spec.js',
    karmaConf = 'test/karma.conf',
    umdWrapper = fs.readFileSync('./.umd');

gulp.task('genjs', function() {
  gulp.src('stddev.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('.'))
});

gulp.task('lint', ['genjs'], function () {
  return gulp.src([source, specs])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gpa', ['genjs'], function () {
  return gulp.src([source, specs])
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [26],
      maintainability: [100]
    }));
});

gulp.task('test', ['genjs'], function () {
  return gulp.src([source, specs])
    .pipe(karma({
      configFile: karmaConf + '.js'
    }));
});

gulp.task('min', ['genjs'], function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(replace(/var stddev;stddev=/, ''))
    .pipe(replace(/(.*)/, umdWrapper))
    .pipe(gulp.dest('.'));
});

gulp.task('test-coffee', function () {
  return gulp.src(['stddev.coffee', 'test/spec/*.spec.coffee'])
    .pipe(karma({
      configFile: karmaConf + '.coffee'
    }));
});

gulp.task('test-min', ['min'], function () {
  return gulp.src([sourceMin, specs])
    .pipe(karma({
      configFile: karmaConf + '.js',
      reporters: ['dots']
    }));
});

gulp.task('default', ['gpa', 'test', 'test-coffee', 'test-min']);