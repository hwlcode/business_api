"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rp = require('request-promise');
var crypto = require('crypto');
var xmlreader = require('xmlreader');
var appid = 'wxb14d114c6ca6db1c';
var mch_id = '1504125851';
var notify_url = '/api/wx_pay/notify';
var key = '0207a9d2bdd47c6775d2b0693571ab49'; // 如果得到的MD5值相同，但签名失败，可能是商户key不对
var WxPay = (function () {
    function WxPay() {
    }
    /**
     * 支付签名
     * @param nonceStr 随机字符串
     * @param prepay_id  prepay_id
     * @param signType 签名类型
     * @param timeStamp 时间戳 必段为字符串型
     * @returns {string}
     */
    WxPay.prototype.paysignjs = function (nonceStr, prepay_id, timeStamp) {
        var ret = {
            appid: appid,
            partnerid: mch_id,
            prepayid: prepay_id,
            timestamp: timeStamp,
            noncestr: nonceStr,
            package: "Sign=WXPay" // 这里一定要是这上 app支付必须写死
        };
        // console.log(ret);
        var string = this.raw(ret);
        // console.log(string);
        string = string + '&key=' + key;
        var sign = crypto.createHash('md5').update(string, 'utf8').digest('hex');
        return sign.toUpperCase();
    };
    /**
     * 预支付签名
     * @param attach: 名称
     * @param body: 购买信息
     * @param nonce_str: 随机字符串
     * @param out_trade_no: 订单号
     * @param spbill_create_ip: pv4客户端地址
     * @param total_fee： 订单总价
     * @param trade_type：交易类型
     * @returns {string}
     */
    WxPay.prototype.paysignjsapi = function (attach, body, nonce_str, out_trade_no, spbill_create_ip, total_fee, trade_type) {
        var ret = {
            appid: appid,
            attach: attach,
            body: body,
            mch_id: mch_id,
            nonce_str: nonce_str,
            notify_url: notify_url,
            out_trade_no: out_trade_no,
            spbill_create_ip: spbill_create_ip,
            total_fee: total_fee * 100,
            trade_type: trade_type
        };
        var string = this.raw(ret);
        string = string + '&key=' + key; //key为在微信商户平台(pay.weixin.qq.com)-->账户设置-->API安全-->密钥设置
        var sign = crypto.createHash('md5').update(string, 'utf8').digest('hex');
        return sign.toUpperCase();
    };
    // 此处的attach不能为空值 否则微信提示签名错误
    WxPay.prototype.order = function (attach, body, out_trade_no, total_fee) {
        var nonce_str = this.createNonceStr();
        var timeStamp = this.createTimeStamp();
        var url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
        var spbill_create_ip = '61.50.221.43';
        var trade_type = 'APP';
        var preSign = this.paysignjsapi(attach, body, nonce_str, out_trade_no, spbill_create_ip, total_fee, trade_type);
        var self = this;
        return new Promise(function (resolve, reject) {
            var formData = "<xml>";
            formData += "<appid>" + appid + "</appid>"; // appid
            formData += "<attach>" + attach + "</attach>"; // 订单标题
            formData += "<body>" + body + "</body>"; // 订单描述
            formData += "<mch_id>" + mch_id + "</mch_id>"; // 商户号
            formData += "<nonce_str>" + nonce_str + "</nonce_str>"; // 随机字符串，不长于32位。
            formData += "<notify_url>" + notify_url + "</notify_url>"; // 回调地址
            formData += "<out_trade_no>" + out_trade_no + "</out_trade_no>"; // 订单号
            formData += "<spbill_create_ip>" + spbill_create_ip + "</spbill_create_ip>"; // IP4地址：客户端地址
            formData += "<total_fee>" + total_fee * 100 + "</total_fee>"; // 订单总价 单位：分
            formData += "<trade_type>" + trade_type + "</trade_type>"; // 交易类型
            formData += "<sign>" + preSign + "</sign>"; // 签名
            formData += "</xml>";
            rp({
                url: url,
                method: 'POST',
                body: formData
            }).then(function (parsedBody) {
                xmlreader.read(parsedBody, function (err, res) {
                    if (err)
                        return console.log(err);
                    // console.log(parsedBody);
                    var prepayid = res.xml.prepay_id.text();
                    //签名
                    var _paySignjs = self.paysignjs(nonce_str, prepayid, timeStamp);
                    // console.log(_paySignjs);
                    // 传给app
                    var args = {
                        appid: appid,
                        partnerid: mch_id,
                        prepayid: prepayid,
                        timestamp: timeStamp,
                        noncestr: nonce_str,
                        package: "Sign=WXPay"
                    };
                    // console.log(args);
                    args['sign'] = _paySignjs;
                    resolve(args);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    //支付回调通知
    WxPay.prototype.notify = function (obj) {
        var output = "";
        if (obj.return_code == "SUCCESS") {
            var reply = {
                return_code: "SUCCESS",
                return_msg: "OK"
            };
        }
        else {
            var reply = {
                return_code: "FAIL",
                return_msg: "FAIL"
            };
        }
        return output;
    };
    // 时间戳产生函数
    WxPay.prototype.createTimeStamp = function () {
        return parseInt((new Date().getTime() / 1000).toString(), 10) + '';
    };
    /**
     * 随机字符串产生函数
     * @returns {string}
     */
    WxPay.prototype.createNonceStr = function () {
        return Math.random().toString(36).substr(2, 15);
    };
    /**
     * 拼接字符串
     */
    WxPay.prototype.raw = function (args) {
        var keys = Object.keys(args);
        keys = keys.sort();
        var newArgs = {};
        keys.forEach(function (key) {
            newArgs[key] = args[key];
        });
        var string = '';
        for (var k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
        }
        string = string.substr(1);
        return string;
    };
    return WxPay;
}());
exports.WxPay = WxPay;
