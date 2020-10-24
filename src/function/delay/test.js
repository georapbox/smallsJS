var delay = require('./delay');

describe('Function/delay', function () {
  it('should delay invokation for 500 milliseconds', function (done) {
    var say = function (a, b) {
      return a + ' ' + b;
    };

    var delayed = delay(function (a, b) {
      expect(say(a, b)).toEqual('hello world');
      done();
    }, 500, 'hello', 'world');

    expect(delayed).toEqual(jasmine.any(Number));
  });
});
