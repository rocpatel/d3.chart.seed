module.exports = function(grunt) {
  "use strict";

  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint : {
      main : {
        src : ['src/**/*.js'],
        options : {
          jshintrc : '.jshintrc'
        }
      }
    },
    jasmine: {
      all: {
        src: ['src/**/*.js'],
        options: {
          vendor : [
            'vendor/d3.js',
            'vendor/d3.chart.js',
            'vendor/jquery-1.10.1.min.js'
          ],
          specs: "spec/*Spec.js",
          helpers: "spec/helpers/*.js"
        }
      }
    },
    connect: {
      test: {
        options: {
          port: 9090
        }
      }
    },
    watch: {
      test: {
        files: ['src/**/*.js', 'spec/**/*.js'],
        tasks: ['jasmine:all:build', 'jshint'],
        options: {
          rewatch: true
        }
      }
    },
    open: {
      testRunner: {
        url: 'http://127.0.0.1:9090/_SpecRunner.html'
      }
    }
  });

  grunt.registerTask('test-interactive', [
    'jasmine:all:build',
    'connect:test',
    'open:testRunner',
    'watch:test'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'jasmine'
  ]);

  grunt.registerTask('default', ['test']);

}