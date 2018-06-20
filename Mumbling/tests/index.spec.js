const assert = require('assert');
const expect = require('chai').expect;
const accum = require('../index');

describe('abcd', function() {
  it('should return "A-Bb-Ccc-Dddd"', function() {
    const expected = 'A-Bb-Ccc-Dddd';
    expect(expected).to.equal(accum('abcd'));
  });
});

describe('RqaEzty', function() {
  it('should return R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy', function() {
    const expected = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy';
    expect(expected).to.equal(accum('RqaEzty'));
  });
});

describe('cwAt', function() {
  it('should return C-Ww-Aaa-Tttt', function() {
    const expected = 'C-Ww-Aaa-Tttt';
    expect(expected).to.equal(accum('cwAt'));
  });
});
