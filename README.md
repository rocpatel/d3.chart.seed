d3.chart.seed
=============
![Build Status] (https://www.codeship.io/projects/46009540-08ea-0131-c7f8-0278930b9bbc/status)

An example seed to create reusable [d3][] charts using the [d3.chart][] framework.

## What this seed includes

- Grunt setup with jshint, connect, jasmine, and watch
- d3.chart, d3, and jquery (just for kicks)
- Boilerplate setup for tests and charts
- jasmine jquery helper

## How to use this seed

- clone this repository and cd to it
- run `npm install`
- add tests to spec/exampleSpec.js
- add your chart logic to src/example.js
- run `grunt` to test and build your chart

## Grunt tasks

- `grunt` (default)  
   Runs `grunt test build`
- `grunt build`  
   minifies your chart and places it in `dist/`
- `grunt test`  
   Runs jshint, jasmine tests through phantomjs
- `grunt test-interactive`  
   Builds the jasmine SpecRunner, serves it via an ad hoc server, and opens it in your browser 

## License
Copyright (c) 2012 Rakesh Patel  
Licensed under the BSD license.

[d3]: http://d3js.org
[d3.chart]: http://misoproject.com/d3-chart/
