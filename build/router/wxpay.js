"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var wx_pay_1 = require("../lib/wx_pay");
var wx_pay_jsapi_1 = require("../lib/wx_pay_jsapi");
var wxPay = new wx_pay_1.WxPay();
function wxpay(app) {
    var _this = this;
    app.post('/api/wx_pay/order', function (req, res) {
        var attach = req.body.attach;
        var body = req.body.body;
        var out_trade_no = req.body.out_trade_no;
        var total_fee = req.body.total_fee;
        wxPay.order(attach, body, out_trade_no, total_fee).then(function (json) {
            res.json({
                code: 0,
                data: json
            });
        });
    });
    app.get('/api/wx_pay/notify', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.json({
                    code: 0,
                    data: ''
                });
                return [2 /*return*/];
            });
        }); })();
    });
    // 查询成功付款的的支付时间
    app.get('/api/wx_pay/:out_trade_no', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var out_trade_no;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    out_trade_no = req.params.out_trade_no;
                    return [4 /*yield*/, wxPay.queryOrder(out_trade_no).then(function (json) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // 更改订单信息
                                res.json({
                                    code: 0,
                                    msg: 'success',
                                    data: json
                                });
                                return [2 /*return*/];
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // 公众号支付: 通过code获取openid返回客户端
    app.get('/api/pay/wx_pay/getOpenId', function (req, res) {
        var code = req.query.code;
        var pay = new wx_pay_jsapi_1.WechatPay();
        //openid
        pay.getAccessToken(code, function (err, data) {
            // console.log(data);
            res.json(data);
        });
    });
    // 公众号支付: 创建公众号订单
    app.get('/api/pay/wx_pay/order', function (req, res) {
        var openid = req.query.openid;
        var attach = req.query.attach;
        var body = req.query.body;
        var total_fee = req.query.total_fee;
        var out_trade_no = req.query.out_trade_no;
        var pay = new wx_pay_jsapi_1.WechatPay();
        pay.createOrder({
            openid: openid,
            out_trade_no: out_trade_no,
            attach: attach,
            body: body,
            total_fee: total_fee,
            spbill_create_ip: req.connection.remoteAddress.replace(/::ffff:/, ''),
        }, function (error, responseData) {
            if (error) {
                console.log(error);
            }
            // console.log(responseData);
            res.json(responseData); /*签名字段*/
        });
    });
    // 公众号支付: 公众号订单回调
    app.post('/api/pay/wx_pay/notifyUrl', function (req, res) {
        var notifyObj = req.body.xml;
        // console.log('gong zhong hao notify');
        // console.log(notifyObj);
        if (notifyObj.result_code[0] == 'SUCCESS') {
            var xml = '<xml>';
            xml += '<return_code><![CDATA[SUCCESS]]></return_code>';
            xml += '<return_msg><![CDATA[OK]]></return_msg>';
            xml += '</xml>';
            res.send(xml);
        }
        else if (notifyObj.result_code[0] == 'FAIL') {
            var xml = '<xml>';
            xml += '<return_code><![CDATA[SUCCESS]]></return_code>';
            xml += '<return_msg><![CDATA[FAIL]]></return_msg>';
            xml += '</xml>';
            res.send(xml);
        }
    });
    // 公众号支付: 订单查询
    app.get('/api/pay/wx_pay/public/orderQuery', function (req, res) {
        var out_trade_no = req.query.out_trade_no;
        var pay = new wx_pay_jsapi_1.WechatPay();
        pay.orderQuery({ out_trade_no: out_trade_no }).then(function (data) {
            // console.log(data);
            res.json(data);
            // if(data['return_code'][0] == 'FAIL'){
            //     res.json({
            //         code: 1001,
            //         status: 'FAIL',
            //         msg: data['return_msg'][0]
            //     });
            // }else{
            //     let result_code = data['result_code'][0];
            //     if (result_code == 'SUCCESS') {
            //         // 订单存在
            //         let trade_state = data['trade_state'][0];
            //         if (trade_state == 'SUCCESS') {
            //             // 交易成功
            //             res.json({
            //                 code: 200,
            //                 status: 'SUCCESS',
            //                 msg: data['trade_state_desc'][0],
            //                 data: {
            //                     transaction_id: data['transaction_id'][0],
            //                     out_trade_no: data['out_trade_no'][0],
            //                     time_end: data['time_end'][0]
            //                 }
            //             });
            //         } else {
            //             // 交易失败
            //             let trade_state_desc = data['trade_state_desc'][0];
            //             res.json({
            //                 code: 1001,
            //                 status: 'FAIL',
            //                 msg: trade_state_desc
            //             });
            //         }
            //     } else if (result_code == 'FAIL') {
            //         // 订单不存在
            //         let err_code_des = data['err_code_des'][0];
            //         res.json({
            //             code: 1000,
            //             status: result_code,
            //             msg: err_code_des
            //         });
            //     }
            // }
        }, function (error) {
            console.log(error);
        });
    });
}
exports.wxpay = wxpay;
