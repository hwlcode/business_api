"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var new_alipay_1 = require("../lib/new_alipay");
var newAlipay = new new_alipay_1.NewAlipay();
function alipayRouter(app) {
    app.get('/api/pay_info', function (req, res) {
        var opts = {
            subject: req.query.subject,
            body: req.query.body,
            outTradeId: req.query.outTradeId,
            amount: req.query.amount // 金额 req.query.amount
        };
        var params = newAlipay.getAppParams(opts);
        res.json({
            code: 0,
            data: {
                msg: params
            }
        });
    });
    app.get('/api/query_order', function (req, res) {
        var outTradeId = req.query.sn + ''; // 订单号
        var tradeId = req.query.trade_id + ''; // 支付宝交易号
        var isPay = newAlipay.queryOrder(outTradeId, tradeId);
        // console.log(isPay);
        res.json({
            code: 0,
            data: {
                ok: isPay
            }
        });
    });
}
exports.alipayRouter = alipayRouter;
