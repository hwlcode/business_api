import * as SMSClient from '@alicloud/sms-sdk'
import * as Models from '../models';

const ObjectId = require('mongodb').ObjectID;
const md5 = require("blueimp-md5");

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
        if(verifyCode.length < 6){
            verifyCode = verifyCode + '0';
        }

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
                res.json({code: 1, msg: '请求次数太频繁，请5分钟后再试！'});
            }
        })
    });

    app.post('/api/user/login', (req, res) => {
        const body = req.body;
        let password = md5('111111');

        (async () => {
            if (body.phoneCode == password) {
            // if (body.phoneCode == verifyCode) {
                let user = await (Models.CustomModel as any).findOrCreate({
                    phone: body.phone
                });

                // 保存18078660058为管理员
                if(user.doc.phone == '18078660058'){
                    await Models.CustomModel.update({
                        phone: body.phone
                    }, {
                        is_admin: 1
                    }).exec();
                }

                let opts = [{
                    path: 'avatar',
                    select: 'path'
                }];
                await  Models.CustomModel.findOne({
                    phone: body.phone
                }).populate(opts).exec((err, doc) => {
                    res.json({
                        code: 0,
                        msg: 'success',
                        data: doc
                    })
                });
            } else {
                res.json({
                    code: 1,
                    msg: '验证码不正确，请输新输入'
                })
            }
        })();
    });

    app.get('/api/profile', (req, res) => {
        const id = new ObjectId(req.query.id);
        (async () => {
            let opts = [{
                path: 'avatar',
                select: 'path'
            }];
            await Models.CustomModel.findOne({
                _id: id
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

        (async () => {
            const user = await Models.CustomModel.update({
                _id: new ObjectId(req.body.id)
            }, body).exec();

            res.json({
                code: 0,
                data: user
            })
        })();
    });

    app.get('/api/users', (req, res) => {
        let page = parseInt(req.query.q) || 1;
        let limit = 10;
        let skip = (page - 1) * limit;
        (async () => {
            let opt = {
                path: 'avatar',
                select: 'path'
            };
            const userList = await Models.CustomModel.find().populate(opt).skip(skip).limit(limit).sort({
                createdAt: -1
            });
            const users = await Models.CustomModel.find();
            res.json({
                code: 0,
                msg: 'success',
                total: users.length,
                data: userList
            });
        })();
    })
}

export {loginRouter}
