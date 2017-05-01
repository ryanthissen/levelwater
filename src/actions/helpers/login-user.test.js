const loginUser = require('./login-user');
const expect = require('chai').expect;
const sinon = require('sinon');
const clock = sinon.useFakeTimers();

describe ('loginUSer function', function() {
  it('should return a status code', done => {
    this.timeout(5000);
    expect(loginUser('alex83@gmail.com', 'something', () => {return 'foo'})).to.include.keys('status');

  })
})
