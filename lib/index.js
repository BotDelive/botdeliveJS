var http = require('request'),
    ctx = {
        _appId: null,
        _secretKey: null,
        _api: 'https://botdelive.com/api/'
    };

function get(api, params, callback) {
    var _def = {
        appId: ctx._appId,
        secretKey: ctx._secretKey
    };

    Object.keys(params).forEach(function(key) {
        _def[key] = params[key]
    });

    http(ctx._api + api, {
        method: "GET",
        qs: _def
    }, function (err, res, body) {
        if(err) return callback({err, internal: true}, null);
        if(typeof body === 'undefined') return callback('Empty response from request.', null);
        try {
            body = JSON.parse(body);
            if(!body.success) {
                return callback({err: body.err, code: body.errCode}, null);
            }
            return callback(null, body.payload)
        } catch (ex) {
            return callback({ex, internal: true}, null);
        }
    });
}

bdJS = function (init) {
    this.ctx = {};
    ctx._appId = init.appId;
    ctx._secretKey = init.secretKey;
    return this;
};

bdJS.prototype = {
    verify: function (accessCode, callback) {
        var apiName = 'verifyAC';
        get(apiName, {accessCode}, function(a, b) {
            return callback(a, b)
        })
    },
    auth: function (userId, callback) {
        var apiName = 'sendAuth';
        get(apiName, {userId}, function(a, b) {
            return callback(a, b)
        })
    },
    push: function (userId, message, callback) {
        var apiName = 'sendPush';
        get(apiName, {userId, message}, function(a, b) {
            return callback(a, b)
        })
    }
};

module.exports = bdJS;