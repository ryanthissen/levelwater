const loginUser = require('./login-user');
const expect = require('chai').expect;

global.localStorage = { setItem: function (key) {
        if( key === 'token' ){ return 'ewrewr'; }
        return null;
    }
  }


describe ('loginUser function', function() {
  it('should not throw an error', done => {
    expect(loginUser).to.not.throw(Error);

  });
});
