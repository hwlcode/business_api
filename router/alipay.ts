import { NewAlipay } from '../lib/new_alipay';

let newAlipay = new NewAlipay();

function alipayRouter(app) {
    app.get('/api/pay_info', (req, res) => {
        let opts = {
            subject: req.query.subject, // 标题
            body: req.query.body, // 商品描述
            outTradeId: req.query.outTradeId, // 订单号
            amount: req.query.amount // 金额 req.query.amount
        }

        let params = newAlipay.getAppParams(opts);
        // app支付因没有提供上线的内容介络，被支付宝官方把app支付功能下线，导致报没有isv权限，客户端显示'系统繁忙，支付失败'
        // 要恢复功能，需要把提供detail页面，另外需要上架android市场
        // todo
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
        // console.log(isPay);

        res.json({
            code: 0,
            data: {
                ok: isPay
            }
        })
    })
}

export {alipayRouter}
