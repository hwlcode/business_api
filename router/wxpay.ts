import {WxPay} from '../lib/wx_pay';

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
    })
}

export {wxpay}
