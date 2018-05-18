import * as Models from '../models';
import * as MD5 from 'ts-md5';

const AdminModel = Models.AdminMode;
const ObjectId = require('mongodb').ObjectID;

function AdminRouter(app) {
    app.post('/api/admin/saveAdmin', (req, res) => {
        let body = req.body;
        (async () => {
            let user = await AdminModel.findOne({
                phone: body.phone
            }).exec();

            if (user == null) {
                await AdminModel.create(body);
            }

            res.json({
                code: 0,
                msg: 'success'
            })
        })();
    });

    app.get('/api/admin/admin-list', (req, res) => {
        (async () => {
            let users = await AdminModel.find().sort({
                created: -1
            }).exec();

            res.json({
                code: 0,
                data: {
                    users: users
                }
            })
        })();
    });

    app.get('/api/admin/delete/:id', (req, res) => {
        (async () => {
            let id = new ObjectId(req.params.id);
            await AdminModel.remove({_id: id});

            let users = await AdminModel.find().sort({
                created: -1
            }).exec();

            res.json({
                code: 0,
                data: {
                    users: users
                }
            })
        })();
    });

    app.get('/api/admin/get_admin_user/:id', (req, res) => {
        let id = new ObjectId(req.params.id);

        (async () => {
            let user = await AdminModel.find({
                _id: id
            }).exec();

            res.json({
                code: 0,
                data: user
            })
        })();
    })

    app.post('/api/admin/update_password', (req, res) => {
        (async () => {
            const body = req.body;
            let id = new ObjectId(body.id);

            await AdminModel.findByIdAndUpdate({
                _id: id
            }, {
                $set: {
                    password: body.newPassword
                }
            }, (err, raw) => {
                console.log(err, raw);
            });

            res.json({
                code: 0,
                msg: 'success'
            })
        })();
    })

    app.post('/api/admin/login', (req, res) => {
        (async () => {
            const body = req.body;
            const user = await AdminModel.findOne({
                phone: body.userName
            }).exec();

            if (user == null) {
                res.json({
                    code: 1000,
                    msg: '用户名或密码不正确，请重新输入'
                })
            } else {
                if (user['password'] == body.password) {
                    const hash = MD5.Md5.hashStr(body.userName + '' + new Date().getTime()).toString();
                    user['token'] = hash;
                    user.save();

                    res.json({
                        code: 0,
                        msg: '登录成功',
                        token: hash
                    })
                } else {
                    res.json({
                        code: 1000,
                        msg: '用户名或密码不正确，请重新输入'
                    })
                }
            }
        })();
    });

    app.get('/api/admin/logout', (req, res) => {
        (async () => {
            const usr = req.query.usr;
            const token = req.query.token;

            const user = await AdminModel.findOne({
                phone: usr
            }).exec();
            if (user == null) {
                res.json({
                    code: 1000,
                    msg: '未知错误'
                })
            } else {
                if (token == user['token']) {
                    user['token'] = null;
                    user.save();

                    res.json({
                        code: 0,
                        msg: '登出成功'
                    })
                } else {
                    res.json({
                        code: 0,
                        msg: '无效的_token'
                    })
                }
            }
        })();
    })
}

export {
    AdminRouter
}
