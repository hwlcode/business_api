import * as SMSClient from '@alicloud/sms-sdk'
import * as Models from '../models';

let verifyCode = '';
setTimeout(() => {
    verifyCode = '';
}, 5 * 60 * 1000);

function MathRand(n) {
    let Num = "";
    for (let i = 0; i < n; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    return Num
}

function loginRouter(app) {
    app.get('/api/verifyCode', (req, res) => {
        const PhoneNumbers = req.query.phone;
        verifyCode = MathRand(6);

        const accessKeyId = 'LTAI4nllpXNPtH1z'
        const secretAccessKey = 'K3r32rZC2zBXVZneOrjrcuZQOd2Ocs'
        //初始化sms_client
        let smsClient = new SMSClient({accessKeyId, secretAccessKey})
        //发送短信
        smsClient.sendSMS({
            PhoneNumbers: PhoneNumbers,             // 接收号码
            SignName: '广西盈垦',                    // 签名
            TemplateCode: 'SMS_106955018',          //短信模板
            TemplateParam: '{"code":' + verifyCode + ',"product":"广西盈垦"}' //短信模板的数据
        }).then(function (res) {
            let {Code} = res
            if (Code === 'OK') {
                //处理返回参数
                res.json(res);
            }
        }, function (err) {
            if (err) {
                console.log(err);
                res.json({code: 1, msg: '请求次数太频繁，请5分钟后再试！'});
            }
        })
    });

    app.post('/api/user/login', (req, res) => {
        const body = req.body;
        (async () => {
            if (body.phoneCode == verifyCode) {
                await Models.CustomModel.findOrCreate({
                    phone: body.phone
                });
                res.json({
                    code: 0,
                    msg: 'success'
                })
            } else {
                res.json({
                    code: 1,
                    msg: '验证码不正确，请输新输入'
                })
            }
        })();
    });

    app.get('/api/profile', (req, res) => {
        const phone = req.query.phone;
        (async () => {
            let opts = [{
                path: 'avatar',
                select: 'path'
            }];
            await Models.CustomModel.findOne({
                phone: phone
            }).populate(opts).exec((err, populatedDoc) => {
                res.json({
                    code: 0,
                    data: populatedDoc
                })
            });
        })();
    })

    app.post('/api/saveProfile', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type");

        const body = req.body;
        console.log(body);
        (async () => {
            const user = await Models.CustomModel.update({
                phone: body.phone
            }, body).exec();

            res.json({
                code: 0,
                data: user
            })
        })();
    })
}

export {loginRouter}
