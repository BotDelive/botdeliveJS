var bdJS = require('../index.js'),
    expect = require('chai').expect,
    assert = require('chai').assert;

var bd = new bdJS({
    appId: '',
    secretKey: '',
});

describe('Functions', function () {
    it('Verify', function (done) {
        assert.isFunction(bd.verify);
        done();
    });
    it('Auth', function (done) {
        assert.isFunction(bd.auth);
        done();
    });
    it('Push', function (done) {
        assert.isFunction(bd.push);
        done();
    })
});

describe('Verify the Access Code', function () {
    it('validation', function (done) {
        bd.verify('', function (err) {
            expect(err).to.be.a('object');
            expect(err.internal).is.a('undefined');
            done();
        });
    });
});

describe('Send a Push Notification', function () {
    it('validation', function (done) {
        bd.push('', '', function (err) {
            expect(err).to.be.a('object');
            expect(err.internal).is.a('undefined');
            done();
        });
    });
});
