"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var Util = (function () {
    function Util() {
    }
    /**
     * 对请求参数进行组装、编码、签名，返回已组装好签名的参数字符串
     * @param {{Object} params  请求参数
     * @param {String} privateKey 商户应用私钥
     * @param {String} [signType] 签名类型 'RSA2' or 'RSA'
     * @returns {String}
     */
    Util.prototype.processParams = function (params, privateKey, signType) {
        var ret = this.encodeParams(params);
        var sign = this.sign(ret.unencode, privateKey, signType);
        return ret.encode + '&sign=' + encodeURIComponent(sign);
    };
    ;
    /**
     * 对请求参数进行组装、编码
     * @param {Object} params  请求参数
     * @returns {Object}
     */
    Util.prototype.encodeParams = function (params) {
        var keys = [];
        for (var k in params) {
            var v = params[k];
            if (params[k] !== undefined && params[k] !== "")
                keys.push(k);
        }
        keys.sort();
        var unencodeStr = "";
        var encodeStr = "";
        var len = keys.length;
        for (var i = 0; i < len; ++i) {
            var k = keys[i];
            if (i !== 0) {
                unencodeStr += '&';
                encodeStr += '&';
            }
            unencodeStr += k + '=' + params[k];
            encodeStr += k + '=' + encodeURIComponent(params[k]);
        }
        return { unencode: unencodeStr, encode: encodeStr };
    };
    ;
    /**
     * 对字符串进行签名验证
     * @param {String} str 要验证的参数字符串
     * @param {String} sign 要验证的签名
     * @param {String} publicKey 支付宝公钥
     * @param {String} [signType] 签名类型
     * @returns {Boolean}
     */
    Util.prototype.signVerify = function (str, sign, publicKey, signType) {
        var verify;
        if (signType === 'RSA2') {
            verify = crypto.createVerify('RSA-SHA256');
        }
        else {
            verify = crypto.createVerify('RSA-SHA1');
        }
        verify.update(str, 'utf8');
        var result = verify.verify(publicKey, sign, 'base64');
        return result;
    };
    ;
    /**
     * 对字符串进行签名
     * @param {String} str 要签名的字符串
     * @param {String} privateKey 商户应用私钥
     * @param {String} [signType] 签名类型
     * @returns {String}
     */
    Util.prototype.sign = function (str, privateKey, signType) {
        var sha;
        if (signType === 'RSA2') {
            sha = crypto.createSign('RSA-SHA256');
        }
        else {
            sha = crypto.createSign('RSA-SHA1');
        }
        sha.update(str, 'utf8');
        return sha.sign(privateKey, 'base64');
    };
    return Util;
}());
exports.default = Util;
