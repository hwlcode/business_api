import {WxPay} from '../lib/wx_pay';
import {OrderModel} from '../models';

let wxPay = new WxPay();

function wxpay(app) {
    app.post('/api/wx_pay/order', (req, res) => {
        var attach = req.body.attach;
        var body = req.body.body;
        var out_trade_no = req.body.out_trade_no;
        var total_fee = req.body.total_fee;

        wxPay.order(attach, body, out_trade_no, total_fee).then(
            json => {
                res.json({
                    code: 0,
                    data: json
                })
            }
        );
    });

    app.get('/api/wx_pay/notify', (req, res) => {
        (async () => {
            res.json({
                code: 0,
                data: ''
            })
        })();
    });

    // 查询成功付款的的支付时间
    app.get('/api/wx_pay/:out_trade_no', async (req, res) => {
        let out_trade_no = req.params.out_trade_no;
        await wxPay.queryOrder(out_trade_no).then(
            async json => {
                // 更改订单信息
                res.json({
                    code: 0,
                    msg: 'success',
                    data: json
                });
            });
    });
}

export {wxpay}
