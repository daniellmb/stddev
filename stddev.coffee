###*
  @file stddev is a simple micro-library that computes the standard deviation for an array of numbers.
  @author Daniel Lamb <dlamb.open.source@gmail.com>
  @param {Array} list - array of numbers
  @returns {Number} standard deviation
###
stddev = (list)->
  {n, m, m2} = list.reduce(({n, m, m2}, i) ->
    delta = i - m
    m += delta / ++n
    m2 += delta * (i - m)
    {n, m, m2}
  , {n: 0, m: 0, m2: 0})
  if n < 2 then 0 else Math.sqrt(m2 / (n - 1))