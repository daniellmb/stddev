# StdDev
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]

## About

StdDev is a micro-library written in CoffeeScript (and includes generated JavaScript versions) that computes the standard deviation for an array of numbers.

## Examples

### CoffeeScript

```CoffeeScript
  stdev = stddev [7, 2, 8, 2, 4, 25, 9, 9, 4, 9]
  console.log stdev # 6.640783086353596
```

### JavaScript

```JavaScript
  var stdev = stddev([7, 2, 8, 2, 4, 25, 9, 9, 4, 9]);
  console.log(stdev); // 6.640783086353596
```

## Install Choices
- `bower install stddev`
- [download the zip](https://github.com/daniellmb/stddev/archive/master.zip)

## Tasks

All tasks can be run by simply running `gulp` or with the `npm test` command, or individually:

  * `gulp lint` will lint source code for syntax errors and anti-patterns.
  * `gulp gpa` will analyze source code against complexity thresholds.
  * `gulp test` will run the jasmine unit tests against the source code.
  * `gulp test-coffee` will run the jasmine unit tests against the CoffeeScript source code.
  * `gulp test-min` will run the jasmine unit tests against the minified code.

## License

(The MIT License)

Copyright (c) 2015 Daniel Lamb dlamb.open.source@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[build-url]: https://travis-ci.org/daniellmb/stddev
[build-image]: http://img.shields.io/travis/daniellmb/stddev.png

[gpa-url]: https://codeclimate.com/github/daniellmb/stddev
[gpa-image]: https://codeclimate.com/github/daniellmb/stddev.png

[coverage-url]: https://codeclimate.com/github/daniellmb/stddev/code?sort=covered_percent&sort_direction=desc
[coverage-image]: https://codeclimate.com/github/daniellmb/stddev/coverage.png

[depstat-url]: https://david-dm.org/daniellmb/stddev
[depstat-image]: https://david-dm.org/daniellmb/stddev.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/stddev/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/stddev.png

[bower-url]: http://bower.io/search/?q=stddev
[bower-image]: https://badge.fury.io/bo/stddev.png

[downloads-url]: https://www.npmjs.org/package/stddev
[downloads-image]: http://img.shields.io/npm/dm/stddev.png

[npm-url]: https://www.npmjs.org/package/stddev
[npm-image]: https://badge.fury.io/js/stddev.png

[irc-url]: http://webchat.freenode.net/?channels=stddev
[irc-image]: http://img.shields.io/badge/irc-%23stddev-brightgreen.png

[gitter-url]: https://gitter.im/daniellmb/stddev
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/stddev-brightgreen.png

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.png