import * as Models from '../models';

const ObjectId = require('mongodb').ObjectID;
const OrderModel = Models.OrderModel;
const UserModel = Models.CustomModel;
const NotificationModel = Models.NotificationModel;

function productRouter(app) {
    app.post('/api/saveProduct', (req, res) => {
        const body = req.body;
        (async () => {
            await Models.ProductModel.create(body);
            res.json({code: 0, msg: 'success'});
        })();
    });

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

    app.get('/api/product/:id', (req, res) => {
        if (req.params.id != 0) {
            let id = new ObjectId(req.params.id);
            (async () => {
                const product = await Models.ProductModel.findOne({_id: id}).exec();
                if (product !== null) {
                    res.json(product);
                }
            })();
        } else {
            res.json({});
        }
    });

    app.post('/api/updateProduct/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        let body = req.body;
        if (req.params.id != 0) {
            (async () => {
                await Models.ProductModel.findByIdAndUpdate({_id: id}, {
                    $set: {
                        name: body.name,
                        price: body.price,
                        banner: body.banner
                    }
                }).exec();

                res.json({code: 0, msg: 'done'});
            })();
        } else {
            res.json([]);
        }
    });

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

    app.get('/api/order/add', (req, res) => {
        let body = {};
        body['products'] = req.query.products;
        body['sumPrice'] = req.query.sumPrice;
        body['customer'] = req.query.customer;
        body['sn'] = 'YK' + new Date().getTime();
        (async () => {
            await OrderModel.create(body);
            res.json({code: 0, msg: 'success'});
        })();
    });

    app.get('/api/order/list', (req, res) => {
        let id = null;
        let orders;

        (async () => {
            if (req.query.id != null) {
                id = new ObjectId(req.query.id);
                orders = await OrderModel.find({
                    customer: id
                }).sort({createdAt: -1}).exec();
            } else {
                orders = await OrderModel.find().sort({createdAt: -1}).exec();
            }

            res.json({
                code: 0,
                msg: 'success',
                orders: orders,
                total: orders.length
            });
        })();
    });

    app.get('/api/order/comfirmorder', (req, res) => {
        let id = req.query.id;
        (async () => {
            let order: any = await OrderModel.findOne({
                _id: new ObjectId(id)
            }).exec();
            // 更改为己发货状态
            order.status = 1;
            order.save();

            let code = order.sumPrice;
            let customer = order.customer;
            let user: any = await UserModel.findOne({
                _id: new ObjectId(customer)
            }).exec();
            // 更改用户积分
            user.code += code;
            user.save();

            //发送通知
            await NotificationModel.create({
                content: '您的订单：' + order.sn + ' 己经发货，请注意查收！非常感谢您的订购，祝生活愉快！',
                fromUser: customer, //后面改成管理员的Id
                toUser: customer
            });

            res.json({
                code: 0,
                msg: 'success'
            });
        })();
    });

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
}

export {productRouter}
