import { NewAlipay } from '../lib/new_alipay';

let newAlipay = new NewAlipay();

function alipayRouter(app) {
    app.get('/api/pay_info', (req, res) => {
        let opts = {
            subject: req.query.subject, // 标题
            body: req.query.body, // 商品描述
            amount: '0.01', // 过期时间 req.query.amount
        }
        let params = newAlipay.getAppParams(opts);

        res.json({
            code: 0,
            data: {
                msg: params
            }
        })
    })
}

export {alipayRouter}
