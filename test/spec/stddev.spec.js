/**
 * @file
 *
 * ### Responsibilities
 * - unit test stddev.js
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

/*global stddev*/
describe('stddev.js', function () {
  beforeEach(function () {
    // add spies
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof stddev).toBe('function');
  });

  it('should return 0 for an array with less than 2 elements', function test() {
    // arrange
    // act
    var result = stddev([1337]);
    // assert
    expect(result).toBe(0);
  });

  it('should the correct standard deviation', function () {
    // arrange
    var tests = [
        [1, 2, 3, 4, 5, 6, 7, 8, 99],
        [7, 2, 8, 2, 4, 25, 9, 9, 4, 9]
      ],
      expected = [
        31.583223394707513,
        6.640783086353596
      ],input, i, len, result;
      for (i = 0, len = tests.length; i < len; i++) {
        input = tests[i];
        // act
        result = stddev(input);
        // assert
        expect(result).toBe(expected[i]);
      }
  });

});