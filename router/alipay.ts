import { NewAlipay } from '../lib/new_alipay';

let newAlipay = new NewAlipay();

function alipayRouter(app) {
    app.get('/api/pay_info', (req, res) => {
        let opts = {
            subject: req.query.subject, // 标题
            body: req.query.body, // 商品描述
            outTradeId: req.query.outTradeId, // 订单号
            amount: '0.01' // 过期时间 req.query.amount
        }

        let params = newAlipay.getAppParams(opts);

        res.json({
            code: 0,
            data: {
                msg: params
            }
        })
    })

    app.get('/api/query_order', (req, res) => {
        let outTradeId = req.query.sn+''; // 订单号
        let tradeId = req.query.trade_id+''; // 支付宝交易号
        let isPay = newAlipay.queryOrder(outTradeId, tradeId);
        console.log(isPay);

        res.json({
            code: 0,
            data: {
                ok: isPay
            }
        })
    })
}

export {alipayRouter}
