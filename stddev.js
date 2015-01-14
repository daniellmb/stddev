
/**
  @file stddev is a simple micro-library that computes the standard deviation for an array of numbers.
  @author Daniel Lamb <dlamb.open.source@gmail.com>
  @param {Array} list - array of numbers
  @returns {Number} standard deviation
 */
var stddev;

stddev = function(list) {
  var m, m2, n, _ref;
  _ref = list.reduce(function(_arg, i) {
    var delta, m, m2, n;
    n = _arg.n, m = _arg.m, m2 = _arg.m2;
    delta = i - m;
    m += delta / ++n;
    m2 += delta * (i - m);
    return {
      n: n,
      m: m,
      m2: m2
    };
  }, {
    n: 0,
    m: 0,
    m2: 0
  }), n = _ref.n, m = _ref.m, m2 = _ref.m2;
  if (n < 2) {
    return 0;
  } else {
    return Math.sqrt(m2 / (n - 1));
  }
};
