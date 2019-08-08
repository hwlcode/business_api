import {
    OrderModel,
    CustomModel,
    ProductModel,
    NotificationModel,
    QuestionsModel,
    VersionModel,
    AddressModel
} from '../models';
import {accessKeyId, secretAccessKey} from '../common/conf';
import * as SMSClient from '@alicloud/sms-sdk'
import {appServerUrl} from "../common/conf";
import {WxPay} from '../lib/wx_pay';

let wxPay = new WxPay();
const ObjectId = require('mongodb').ObjectID;

function productRouter(app) {
    // 创建商品
    app.post('/api/saveProduct', (req, res) => {
        const body = req.body;
        (async () => {
            await ProductModel.create(body);
            res.json({code: 0, msg: 'success'});
        })();
    });
    // app商品列表
    app.get('/api/productList', (req, res) => {
        let page = parseInt(req.query.q) || 1;
        let limit = 10;
        let skip = (page - 1) * limit;
        (async () => {
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await ProductModel.find().populate(opt).skip(skip).limit(limit).sort({
                order_index: -1
            });
            const products = await ProductModel.find();
            res.json({
                code: 0,
                msg: 'success',
                total: products.length,
                data: productList
            });
        })();
    });
    // 后台商品列表（弃用）
    app.get('/api/products/list', (req, res) => {
        let keywords = req.query.keywords || '';
        let pattern = new RegExp(keywords, "i");
        let page = parseInt(req.query.page) || 1;
        let limit = 6;
        let skip = (page - 1) * limit;
        (async () => {
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await ProductModel.find({
                name: pattern,
                pro_status: 0
            }).populate(opt).skip(skip).limit(limit).sort({
                order_index: -1
            });

            if (productList.length > 0) {
                productList.map(obj => {
                    obj['banner']['path'] = appServerUrl + obj['banner']['path'];
                });
            }

            const products = await ProductModel.find({pro_status: 0});
            const isLast = (page * limit) >= products.length;
            res.json({
                code: 0,
                msg: 'success',
                total: products.length,
                data: productList,
                isLast: isLast
            });
        })();
    });
    // app 产品详情
    app.get('/api/app/product/:id', (req, res) => {
        (async () => {
            const id = new ObjectId(req.params.id);
            const product = await ProductModel.findOne({_id: id}).populate({
                path: 'banner',
                select: 'path'
            }).exec();

            if (product != null) {
                product['banner']['path'] = appServerUrl + product['banner']['path'];
            }

            res.json({
                code: 0,
                msg: 'success',
                data: product
            });
        })();
    });

    // 产品详情
    app.get('/api/product/:id', (req, res) => {
        if (req.params.id != 0) {
            let id = new ObjectId(req.params.id);
            let opt = {
                path: 'banner',
                select: 'path'
            };
            (async () => {
                const product = await ProductModel.findOne({_id: id}).populate(opt).exec();
                if (product !== null) {
                    res.json(product);
                }
            })();
        } else {
            res.json({});
        }
    });
    // 更新产品
    app.post('/api/updateProduct/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        let body = req.body;
        if (req.params.id != 0) {
            (async () => {
                await ProductModel.findByIdAndUpdate({_id: id}, {
                    $set: {
                        name: body.name,
                        price: body.price,
                        unit: body.unit,
                        banner: body.banner,
                        code: body.code,
                        desc: body.desc,
                        pro_status: body.pro_status,
                        origin_price: body.origin_price,
                        origin_price_unit: body.origin_price_unit,
                        order_index: body.order_index
                    }
                }).exec();

                res.json({code: 0, msg: 'done'});
            })();
        } else {
            res.json([]);
        }
    });
    // 删除商品
    app.get('/api/delete/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        (async () => {
            await ProductModel.findByIdAndUpdate(id, {
                pro_status: 1000
            });
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await ProductModel.find().populate(opt).sort({
                createdAt: -1
            });

            res.json({
                code: 0,
                msg: 'done',
                data: productList
            })
        })();
    });

    // 添加订单
    app.get('/api/order/add', (req, res) => {
        let body = {};
        body['products'] = req.query.products;
        body['sumPrice'] = req.query.sumPrice;
        body['customer'] = req.query.customer;  // 下单用户_id
        body['sn'] = 'YK' + new Date().getTime();
        (async () => {
            let order = await OrderModel.create(body);
            res.json({
                code: 0, msg: 'success', data: {
                    sn: order._id,
                    no: body['sn']
                }
            });
        })();
    });
    // 订单列表
    app.get('/api/order/list', (req, res) => {
        let id = null;
        let orders;
        let page = req.query.q || 1;
        let limit = 10;
        let skip = (page - 1) * limit;
        let keywords = req.query.keywords || '';

        (async () => {
            let total = 0;
            if (req.query.id != null) {
                // app
                id = new ObjectId(req.query.id);
                orders = await OrderModel.find({
                    customer: id,
                    status: {$lt: 1000}
                }).skip(skip).limit(limit).sort({createdAt: -1}).exec();
                let allOrders = await OrderModel.find({
                    customer: id,
                    status: {$lt: 1000}
                });
                total = allOrders.length;
            } else {
                // admin 后台
                if (keywords == null) {
                    // 列表
                    orders = await OrderModel.find({
                        // status: {$gte: 1}
                    }).skip(skip).limit(limit).sort({createdAt: -1, status: -1}).exec();
                    let allOrders = await OrderModel.find().exec();
                    total = allOrders.length;
                } else {
                    // 测试jenkins
                    // search
                    orders = await OrderModel.find({
                        sn: new RegExp(keywords, 'i'),
                        // status: {$gte: 1}
                    }).skip(skip).limit(limit).sort({createdAt: -1, status: -1}).exec();
                    let allOrders = await OrderModel.find({
                        sn: new RegExp(keywords, 'i'),
                        // status: {$gte: 1}
                    }).exec();
                    total = allOrders.length;
                }

            }

            res.json({
                code: 0,
                msg: 'success',
                orders: orders,
                total: total
            });
        })();
    });
    // 订单详情
    app.get('/api/order/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        let opt = [{
            path: 'address'
        }];
        (async () => {
            let order = await OrderModel.find({
                _id: id
            }).populate(opt).exec();

            res.json({
                code: 0,
                data: order
            })
        })();
    });
    // 修改订单收货地址
    app.get('/api/order/change-address/:sn/:id', async (req, res) => {
        const id = new ObjectId(req.params.id);
        const sn = new ObjectId(req.params.sn);
        await OrderModel.findByIdAndUpdate(sn, {address: id}).exec();

        res.json({
            code: 0,
            msg: 'success'
        });
    });

    // 删除订单
    app.get('/api/order/del/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        (async () => {
            let order = await OrderModel.findOne({_id: id}).exec();
            if (order['status'] == 0) {
                await OrderModel.findByIdAndUpdate(id, {
                    status: 1000
                }).exec();

                res.json({
                    code: 0,
                    msg: 'success'
                });
            } else {
                res.json({
                    code: 1000,
                    msg: '删除失败，订单正在交易状态！'
                });
            }
        })();
    });
    // 更改为己付款
    app.get('/api/order/confirm_order/:id/:payway', (req, res) => {
        let id = req.params['id'];
        let payWay = req.params['payway'];

        (async () => {
            let order = await OrderModel.findOne({
                _id: new ObjectId(id)
            }).exec();
            // 更改为己付款
            order['status'] = 1;
            order['payway'] = payWay;
            await order.save();

            // 查询成功付款的的支付时间
            if (payWay == 1) {
                let out_trade_no = order['sn'];
                wxPay.queryOrder(out_trade_no).then(
                    json => {
                        order['transaction_id'] = json['transaction_id'];
                        order['wx_time_end'] = json['wx_time_end'];
                        order.save();
                    }
                );
            }

            res.json({
                code: 0,
                msg: 'success'
            });
        })();
    });
    // 更改为己发货
    app.get('/api/order/send/:id', (req, res) => {
        let id = new ObjectId(req.params.id);

        (async () => {
            let order: any = await OrderModel.findOne({
                _id: id
            }).exec();
            // 更改为己发货状态
            order.status = 2;
            order.save();

            let customer = order.customer; // 下单用户id
            let user: any = await CustomModel.findOne({
                _id: new ObjectId(customer)
            }).exec();
            if (order.type == 0) {
                let code = Math.ceil(order.sumPrice);
                // 更改用户积分
                user.code += code;
                user.save();
            } else if (order.type == 1) {
                let product = JSON.parse(order.products);
                let code = product[0].price * product[0].orderNum;
                // 更改用户积分
                user.code -= code;
                user.save();
            }

            let admin = await CustomModel.findOne({
                is_admin: 1
            }).exec();

            //发送通知
            await NotificationModel.create({
                content: '您的订单：' + order.sn + ' 己发货，由快递配送，请注意查收！非常感谢您的订购，祝生活愉快！',
                fromUser: admin._id, //后面改成管理员的Id
                toUser: customer
            });

            //初始化sms_client
            let smsClient = new SMSClient({accessKeyId, secretAccessKey});
            //发送短信
            await smsClient.sendSMS({
                PhoneNumbers: user.phone,                     // 接收号码
                SignName: '广西盈垦',                            // 签名
                TemplateCode: 'SMS_133979691',                  //短信模板
                TemplateParam: JSON.stringify({sn: order.sn})    //短信模板的数据
            }).then(function (data) {
                let Code = data['Code'];
                if (Code === 'OK') {
                    //处理返回参数
                    // res.send(data);
                }
            }, function (err) {
                if (err) {
                    console.log(err);
                }
            });

            res.json({
                code: 0,
                msg: 'success'
            });
        })();
    });

    // 发送通知
    app.get('/api/notification/create/:content/:from/:to', (req, res) => {
        let content = req.params.content;
        let fromUser = new ObjectId(req.params.from);
        let toUser = new ObjectId(req.params.to);

        // console.log('content:' + content, 'fromUser: '+ fromUser, 'toUser:' + toUser);
        (async () => {
            //发送通知
            await NotificationModel.create({
                content: content,
                fromUser: fromUser, //后面改成管理员的Id
                toUser: toUser
            });

            res.json({
                code: 0,
                msg: 'success'
            });
        })();
    });
    // 通知列表
    app.get('/api/notification', (req, res) => {
        let userId = new ObjectId(req.query.id);
        (async () => {
            let list = await NotificationModel.find({
                toUser: userId,
                status: 0
            }).sort({
                createdAt: -1
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: list
            });
        })();
    });
    // 未读通知
    app.get('/api/notification/unread', (req, res) => {
        let userId = new ObjectId(req.query.id);
        (async () => {
            let list = await NotificationModel.find({
                toUser: userId,
                status: 0,
                read: 0
            }).sort({
                createdAt: -1
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: list
            });
        })();
    });
    // 删除通知
    app.get('/api/notification/delete', (req, res) => {
        let id = new ObjectId(req.query.id);
        (async () => {
            let item: any = await NotificationModel.findOne({
                _id: id
            }).exec();

            item.status = 1;
            item.save();

            let unRead = await NotificationModel.find({
                toUser: new ObjectId(req.query.userId),
                status: 0,
                read: 0
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: {unReadNum: unRead.length}
            })
        })();
    });
    // 阅读通知
    app.get('/api/notification/read', (req, res) => {
        let id = new ObjectId(req.query.id);
        (async () => {
            let item: any = await NotificationModel.findOne({
                _id: id
            }).exec();

            item.read = 1;
            item.save();

            let unRead = await NotificationModel.find({
                toUser: new ObjectId(req.query.userId),
                status: 0,
                read: 0
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: {unReadNum: unRead.length - 1}
            })
        })();
    });

    // 后台首页
    app.get('/api/dashboard', (req, res) => {
        (async () => {
            let product_sun = await ProductModel.find().count();
            let product_0_sun = await ProductModel.find({
                pro_status: 0
            }).count();
            let product_1_sun = await ProductModel.find({
                pro_status: 1
            }).count();

            let order_sun = await  OrderModel.find().count();

            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            let day = new Date().getDate();

            let order_today = await  OrderModel.find({
                createdAt: {
                    $gte: new Date(year + '-' + month + '-' + day + ' 00:00:00'),
                    $lt: new Date(year + '-' + month + '-' + day + ' 23:59:59')
                }
            }).count();
            let order_status_1 = await  OrderModel.find({
                status: 1
            }).count();
            let order_status_0 = await  OrderModel.find({
                status: 0
            }).count();

            let user_sun = await CustomModel.find().count();
            let user_today = await CustomModel.find({
                createdAt: {
                    $gte: new Date(year + '-' + month + '-' + day + ' 00:00:00'),
                    $lt: new Date(year + '-' + month + '-' + day + ' 23:59:59')
                }
            }).count();

            res.json({
                code: 0,
                data: {
                    product_sun: product_sun, // 产品总数
                    product_0_sun: product_0_sun,
                    product_1_sun: product_1_sun,
                    order_sun: order_sun, // 订单总数
                    order_today: order_today, // 今日新增订单
                    order_status_0: order_status_0, // 待付款订单
                    order_status_1: order_status_1, // 己支付，待发货订单
                    user_sun: user_sun, // 用户总数
                    user_today: user_today // 今日新增用户
                }
            })
        })();
    });

    // 获取管理的id
    app.get('/api/get_admin_id', (req, res) => {
        (async () => {
            let admin = await CustomModel.findOne({
                is_admin: 1
            }).exec();

            res.json({
                code: 0,
                data: admin
            })
        })();
    });
    // 积分兑换订单
    app.post('/api/update_code', (req, res) => {
        let id = req.body.id;
        let product = req.body.product;

        (async () => {
            // 创建订单
            let body = {};
            body['products'] = '[' + JSON.stringify(product) + ']';
            body['sumPrice'] = 0;
            body['customer'] = id;
            body['sn'] = 'YK' + new Date().getTime();
            body['type'] = 1;

            let order = await OrderModel.create(body);

            // 发送通知
            let admin = await CustomModel.findOne({
                is_admin: 1
            }).exec();

            //发送通知
            await NotificationModel.create({
                content: '我们己经收到您的订单：' + body['sn'] + ' 非常感谢您的订购，我们会尽快为您处理，祝生活愉快！',
                fromUser: admin._id, //后面改成管理员的Id
                toUser: id
            });

            res.json({
                code: 0,
                msg: 'success',
                data: order
            })
        })();
    });

    // 保存问题
    app.post('/api/admin/saveQuestion', (req, res) => {
        const body = req.body;
        (async () => {
            await QuestionsModel.create(body);
            res.json({
                code: 0,
                msg: 'success'
            });
        })();
    });
    // 所有问题
    app.get('/api/admin/questions-list', (req, res) => {
        (async () => {
            const list = await QuestionsModel.find().populate({
                path: 'files'
            }).sort({
                createdAt: -1
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: list
            });
        })();
    });
    // 查询问题
    app.get('/api/admin/question/:id', (req, res) => {
        (async () => {
            const id = new ObjectId(req.params.id);
            const question = await QuestionsModel.findOne({
                _id: id
            }).populate({
                path: 'files'
            }).sort({status: -1}).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: question
            });
        })();
    });
    // 更新问题
    app.post('/api/admin/updateQuestion', (req, res) => {
        const body = req.body;
        (async () => {
            const id = new ObjectId(body.id);
            const question = await QuestionsModel.findByIdAndUpdate(id, {
                $set: {
                    dealCate: body.dealCate,
                    dealDesc: body.dealDesc,
                    status: 1
                }
            }).exec();

            res.json({
                code: 0,
                msg: 'success',
                data: question
            });
        })();
    });

    // 保存版本
    app.post('/api/admin/save/version', (req, res) => {
        const body = req.body;
        (async () => {
            const version = await VersionModel.findOne().exec();
            if (version == null) {
                await VersionModel.create(body);
            } else {
                version['versionNumber'] = body.versionNumber;
                version['androidUrl'] = body.androidUrl;
                version['iosUrl'] = body.iosUrl;
                version['desc'] = body.desc;
                await version.save();
            }

            res.json({
                code: 0,
                msg: 'success'
            })
        })();
    });
    // 获取版本
    app.get('/api/admin/get/version', (req, res) => {
        (async () => {
            const version = await VersionModel.findOne().exec();
            res.json({
                code: 0,
                msg: 'success',
                data: version
            })
        })();
    });

    // 添加收货地址
    app.post('/api/user/address', async (req, res) => {
        const body = req.body;
        const userId = new ObjectId(body.userId);
        const address = await AddressModel.findOne({userId: userId}).exec();
        if (address == null) {
            body.is_default = 1;
        } else {
            body.is_default = 0;
        }
        if (body.id != undefined) {
            await AddressModel.findByIdAndUpdate(body.id, body);
        } else {
            await AddressModel.create(body);
        }

        res.json({
            code: 0,
            msg: 'success'
        });
    });

    // 获取用户收货地址列表
    app.get('/api/user/address-list', async (req, res) => {
        const userId = new ObjectId(req.query.userId);

        const address = await AddressModel.find({userId: userId}).exec();

        res.json({
            code: 0,
            msg: 'success',
            data: address
        });
    });

    // 更新默认收货地址
    app.get('/api/user/address/be-default', async (req, res) => {
        const userId = new ObjectId(req.query.userId);
        const addressId = new ObjectId(req.query.addressId);

        await AddressModel.update({userId: userId, is_default: 1}, {
            is_default: 0
        }).exec();

        await AddressModel.update({_id: addressId}, {
            is_default: 1
        }).exec();

        const list = await AddressModel.find({userId: userId}).exec();

        res.json({
            code: 0,
            msg: 'success',
            data: list
        });
    });

    // 删除收货地址
    app.get('/api/user/del-address', async (req, res) => {
        const id = new ObjectId(req.query.id);
        await AddressModel.findById(id).remove();

        res.json({
            code: 0,
            msg: 'success'
        });
    });

    // 获取用户默认收货地址
    app.get('/api/user/default-address', async (req, res) => {
        const userId = new ObjectId(req.query.userId);
        const address = await AddressModel.findOne({userId: userId, is_default: 1}).exec();

        res.json({
            code: 0,
            msg: 'success',
            data: address
        });
    });
}

export {productRouter}
