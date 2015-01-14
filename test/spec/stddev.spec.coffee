###
@file

## Responsibilities
- unit test stddev.coffee

Scaffolded with generator-microjs v0.1.2

@author Daniel Lamb <dlamb.open.source@gmail.com>
###

describe 'stddev.coffee', ->
  beforeEach ->
    # add spies

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(true).not.toBe false

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof stddev).toBe 'function'

  it 'should return 0 for an array with less than 2 elements', ->
    # arrange
    # act
    result = stddev([1337])
    # assert
    expect(result).toBe(0)

  it 'should the correct standard deviation', ->
    # arrange
    tests = [
      [1, 2, 3, 4, 5, 6, 7, 8, 99]
      [7, 2, 8, 2, 4, 25, 9, 9, 4, 9]
    ]
    expected = [
      31.583223394707513
      6.640783086353596
    ]
    for input, i in tests
      # act
      result = stddev(input)
      # assert
      expect(result).toBe(expected[i])