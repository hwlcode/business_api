import {WxPay} from '../lib/wx_pay';
import {WechatPay} from '../lib/wx_pay_jsapi';

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

    // 公众号支付: 通过code获取openid返回客户端
    app.get('/api/pay/wx_pay/getOpenId', function (req, res) {
        let code = req.query.code;
        let pay = new WechatPay();
        //openid
        pay.getAccessToken(code, function (err, data) {
            // console.log(data);
            res.json(data);
        })
    });
    // 公众号支付: 创建公众号订单
    app.get('/api/pay/wx_pay/order', function (req, res) {
        let openid = req.query.openid;
        let attach = req.query.attach;
        let body = req.query.body;
        let total_fee = req.query.total_fee;
        let out_trade_no = req.query.out_trade_no;
        let pay = new WechatPay();

        pay.createOrder({
            openid: openid,
            out_trade_no: out_trade_no, //订单号
            attach: attach,
            body: body,
            total_fee: total_fee, // 此处的额度为分
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
        let notifyObj = req.body.xml;
        // console.log('gong zhong hao notify');
        // console.log(notifyObj);
        if (notifyObj['result_code'][0] == 'SUCCESS') {
            let xml = '<xml>';
            xml += '<return_code><![CDATA[SUCCESS]]></return_code>';
            xml += '<return_msg><![CDATA[OK]]></return_msg>';
            xml += '</xml>';
            res.send(xml);
        } else if (notifyObj['result_code'][0] == 'FAIL') {
            let xml = '<xml>';
            xml += '<return_code><![CDATA[SUCCESS]]></return_code>';
            xml += '<return_msg><![CDATA[FAIL]]></return_msg>';
            xml += '</xml>';
            res.send(xml);
        }
    });
    // 公众号支付: 订单查询
    app.get('/api/pay/wx_pay/public/orderQuery', (req, res) => {
        let out_trade_no = req.query.out_trade_no;
        let pay = new WechatPay();
        pay.orderQuery({out_trade_no: out_trade_no}).then(data => {
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
        }, error => {
            console.log(error);
        })
    });
}

export {wxpay}
