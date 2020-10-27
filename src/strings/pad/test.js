var pad = require('./pad');

describe('String/pad', function () {
  it('pads a string on both sides to the given length', function () {
    expect(pad('Hello', 9, ' ')).toBe('  Hello  ');

    expect(pad('Hello', 9)).toBe('  Hello  ');

    expect(pad('Hello', 9, '-')).toBe('--Hello--');

    expect(pad('Hello', 3, '-')).toBe('Hello');

    expect(function () {
      return pad(123456, 3);
    }).toThrow();

    expect(function () {
      return pad('Hello', '9');
    }).toThrow();
  });
});
