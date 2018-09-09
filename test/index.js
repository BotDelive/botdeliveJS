var bdJS = require('../index.js'),
    assert = require('chai').assert;

var bd = new bdJS({
    appId: '',
    secretKey: '',
});

describe('Functions', function () {
    it('Verify is function', function (done) {
        assert.isFunction(bd.verify);
        done();
    });
    it('Auth is function', function (done) {
        assert.isFunction(bd.auth);
        done();
    });
    it('Push is function', function (done) {
        assert.isFunction(bd.push);
        done();
    })
});

describe('Verify access code', function () {
    it('responds as a valid object', function (done) {
        bd.verify('', function (err) {
            if (typeof(err) === 'object') {
                if (typeof err.internal !== 'undefined' && err.internal === true) {
                    done("an internal error | " + JSON.stringify(err))
                } else {
                    done()
                }
            } else {
                done("not an object")
            }
        });
    });
});

describe('Send Push', function () {
    it('responds as a valid object', function (done) {
        bd.push('', '', function (err) {
            if (typeof(err) === 'object') {
                if (typeof err.internal !== 'undefined' && err.internal === true) {
                    done("an internal error | " + JSON.stringify(err))
                } else {
                    done()
                }
            } else {
                done("not an object")
            }
        });
    });
});
