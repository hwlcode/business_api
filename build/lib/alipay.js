"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var util_1 = require("./util");
var path = require("path");
var fs = require("fs");
var util = new util_1.Util();
var rsaPrivatePath = path.resolve('./pem/rsa_private_key.pem');
var rsaPublicPath = path.resolve('./pem/rsa_public_key.pem');
var rsaPrivate = fs.readFileSync(rsaPrivatePath, 'utf-8');
var rsaPublic = fs.readFileSync(rsaPublicPath, 'utf-8');
var Alipay = (function () {
    function Alipay() {
    }
    // 公用参数
    Alipay.prototype.makeParams = function (method, biz_content) {
        return {
            app_id: '2018040302498148',
            method: method,
            format: 'JSON',
            charset: 'utf-8',
            sign_type: 'RSA2',
            timestamp: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
            version: '1.0',
            return_url: 'http://www.baidu.com',
            notify_url: 'http://www.baidu.com',
            biz_content: JSON.stringify(biz_content)
        };
    };
    Alipay.prototype.pay = function (opts) {
        var biz_content = {
            body: opts.body,
            subject: opts.subject,
            out_trade_no: opts.outTradeId,
            timeout_express: opts.timeout,
            total_amount: opts.amount,
            seller_id: opts.sellerId,
            product_code: 'QUICK_MSECURITY_PAY',
            goods_type: opts.goodsType,
            passback_params: opts.passbackParams,
            promo_params: opts.promoParams,
            extend_params: opts.extendParams,
            enable_pay_channels: opts.enablePayChannels,
            disable_pay_channels: opts.disablePayChannels,
            store_id: opts.storeId,
            notify_url: ''
        };
        var params = this.makeParams('alipay.trade.app.pay', biz_content);
        return util.processParams(params, rsaPrivate, 'RSA2');
    };
    /**
     * 签名校验
     * @param {Object} response 支付宝的响应报文
     */
    Alipay.prototype.signVerify = function (response) {
        var ret = util.copy(response);
        // console.log(ret);
        var sign = ret['sign'];
        ret['sign'] = undefined;
        ret['sign_type'] = undefined;
        var tmp = util.encodeParams(ret);
        return util.signVerify(tmp.unencode, sign, rsaPublic, 'RSA2');
    };
    return Alipay;
}());
exports.Alipay = Alipay;
