"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var new_alipay_1 = require("../lib/new_alipay");
var newAlipay = new new_alipay_1.NewAlipay();
function alipayRouter(app) {
    app.get('/api/pay_info', function (req, res) {
        var opts = {
            subject: req.query.subject,
            body: req.query.body,
            amount: '0.01',
        };
        var params = newAlipay.getAppParams(opts);
        res.json({
            code: 0,
            data: {
                msg: params
            }
        });
    });
}
exports.alipayRouter = alipayRouter;
