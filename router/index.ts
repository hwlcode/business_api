import * as Models from '../models';
import { accessKeyId, secretAccessKey } from '../common/conf';
import * as SMSClient from '@alicloud/sms-sdk'

const ObjectId = require('mongodb').ObjectID;
const OrderModel = Models.OrderModel;
const UserModel = Models.CustomModel;
const ProductModel = Models.ProductModel;
const NotificationModel = Models.NotificationModel;


function productRouter(app) {
    // 创建商品
    app.post('/api/saveProduct', (req, res) => {
        const body = req.body;
        (async () => {
            await Models.ProductModel.create(body);
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
            const productList = await Models.ProductModel.find().populate(opt).skip(skip).limit(limit).sort({
                createdAt: -1
            });
            const products = await Models.ProductModel.find();
            res.json({
                code: 0,
                msg: 'success',
                total: products.length,
                data: productList
            });
        })();
    });
    // 后台商品列表
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
            const productList = await Models.ProductModel.find({
                name: pattern
            }).populate(opt).skip(skip).limit(limit).sort({
                createdAt: -1
            });
            const products = await Models.ProductModel.find();
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
    // 产品详情
    app.get('/api/product/:id', (req, res) => {
        if (req.params.id != 0) {
            let id = new ObjectId(req.params.id);
            let opt = {
                path: 'banner',
                select: 'path'
            };
            (async () => {
                const product = await Models.ProductModel.findOne({_id: id}).populate(opt).exec();
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
                await Models.ProductModel.findByIdAndUpdate({_id: id}, {
                    $set: {
                        name: body.name,
                        price: body.price,
                        unit: body.unit,
                        banner: body.banner,
                        code: body.code,
                        desc: body.desc
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
            await Models.ProductModel.findOne({_id: id}).remove();
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await Models.ProductModel.find().populate(opt).sort({
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
        body['customer'] = req.query.customer;
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

        (async () => {
            let total = 0;
            if (req.query.id != null) {
                id = new ObjectId(req.query.id);
                orders = await OrderModel.find({
                    customer: id
                }).skip(skip).limit(limit).sort({createdAt: -1}).exec();
                let allOrders = await OrderModel.find();
                total = allOrders.length;
            } else {
                orders = await OrderModel.find({
                    status: {$gte: 1}
                }).skip(skip).limit(limit).sort({createdAt: -1,status: -1}).exec();
                total = await OrderModel.find().count();
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
        let opt = {
            path: 'customer'
        };
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


    // 更改为己付款
    app.get('/api/order/confirm_order/:id', (req, res) => {
        let id = req.params.id;
        (async () => {
            let order = await OrderModel.findOne({
                _id: new ObjectId(id)
            }).exec();
            // 更改为己发货状态
            order['status'] = 1;
            order.save();

            // let code = order.sumPrice;
            // let customer = order.customer;
            // let user: any = await UserModel.findOne({
            //     _id: new ObjectId(customer)
            // }).exec();
            // // 更改用户积分
            // user.code += code;
            // user.save();

            //发送通知
            // await NotificationModel.create({
            //     content: '您的订单：' + order.sn + ' 己经生成，我们会尽快为您发货！非常感谢您的订购，祝生活愉快！',
            //     fromUser: customer, //后面改成管理员的Id
            //     toUser: customer
            // });

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

            let customer = order.customer;
            let user: any = await UserModel.findOne({
                _id: new ObjectId(customer)
            }).exec();
            if (order.type == 0) {
                let code = order.sumPrice;
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

            let admin = await UserModel.findOne({
                is_admin: 1
            }).exec();

            //发送通知
            await NotificationModel.create({
                content: '您的订单：' + order.sn + ' 己发货，请注意查收！非常感谢您的订购，祝生活愉快！',
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

            res.json({
                code: 0,
                msg: 'success'
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

            res.json({
                code: 0,
                msg: 'success'
            })
        })();
    });

    // 后台首页
    app.get('/api/dashboard', (req, res) => {
        (async () => {
            let product_sun = await ProductModel.find().count();

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

            let user_sun = await UserModel.find().count();
            let user_today = await UserModel.find({
                createdAt: {
                    $gte: new Date(year + '-' + month + '-' + day + ' 00:00:00'),
                    $lt: new Date(year + '-' + month + '-' + day + ' 23:59:59')
                }
            }).count();

            res.json({
                code: 0,
                data: {
                    product_sun: product_sun,
                    order_sun: order_sun,
                    order_today: order_today,
                    order_status_1: order_status_1,
                    user_sun: user_sun,
                    user_today: user_today
                }
            })
        })();
    });

    // 获取管理的id
    app.get('/api/get_admin_id', (req, res) => {
        (async () => {
            let admin = await UserModel.findOne({
                is_admin: 1
            }).exec();
console.log(admin);
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
            let admin = await UserModel.findOne({
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
}

export {productRouter}
