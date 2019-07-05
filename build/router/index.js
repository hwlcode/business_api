"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var conf_1 = require("../common/conf");
var SMSClient = require("@alicloud/sms-sdk");
var conf_2 = require("../common/conf");
var wx_pay_1 = require("../lib/wx_pay");
var wxPay = new wx_pay_1.WxPay();
var ObjectId = require('mongodb').ObjectID;
function productRouter(app) {
    var _this = this;
    // 创建商品
    app.post('/api/saveProduct', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.ProductModel.create(body)];
                    case 1:
                        _a.sent();
                        res.json({ code: 0, msg: 'success' });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // app商品列表
    app.get('/api/productList', function (req, res) {
        var page = parseInt(req.query.q) || 1;
        var limit = 10;
        var skip = (page - 1) * limit;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opt, productList, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = {
                            path: 'banner',
                            select: 'path'
                        };
                        return [4 /*yield*/, models_1.ProductModel.find().populate(opt).skip(skip).limit(limit).sort({
                                createdAt: -1
                            })];
                    case 1:
                        productList = _a.sent();
                        return [4 /*yield*/, models_1.ProductModel.find()];
                    case 2:
                        products = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            total: products.length,
                            data: productList
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 后台商品列表
    app.get('/api/products/list', function (req, res) {
        var keywords = req.query.keywords || '';
        var pattern = new RegExp(keywords, "i");
        var page = parseInt(req.query.page) || 1;
        var limit = 6;
        var skip = (page - 1) * limit;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opt, productList, products, isLast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = {
                            path: 'banner',
                            select: 'path'
                        };
                        return [4 /*yield*/, models_1.ProductModel.find({
                                name: pattern,
                                pro_status: 0
                            }).populate(opt).skip(skip).limit(limit).sort({
                                createdAt: -1
                            })];
                    case 1:
                        productList = _a.sent();
                        if (productList.length > 0) {
                            productList.map(function (obj) {
                                obj['banner']['path'] = conf_2.appServerUrl + obj['banner']['path'];
                            });
                        }
                        return [4 /*yield*/, models_1.ProductModel.find({ pro_status: 0 })];
                    case 2:
                        products = _a.sent();
                        isLast = (page * limit) >= products.length;
                        res.json({
                            code: 0,
                            msg: 'success',
                            total: products.length,
                            data: productList,
                            isLast: isLast
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // app 产品详情
    app.get('/api/app/product/:id', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var id, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = new ObjectId(req.params.id);
                        return [4 /*yield*/, models_1.ProductModel.findOne({ _id: id }).populate({
                                path: 'banner',
                                select: 'path'
                            }).exec()];
                    case 1:
                        product = _a.sent();
                        if (product != null) {
                            product['banner']['path'] = conf_2.appServerUrl + product['banner']['path'];
                        }
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: product
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 产品详情
    app.get('/api/product/:id', function (req, res) {
        if (req.params.id != 0) {
            var id_1 = new ObjectId(req.params.id);
            var opt_1 = {
                path: 'banner',
                select: 'path'
            };
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, models_1.ProductModel.findOne({ _id: id_1 }).populate(opt_1).exec()];
                        case 1:
                            product = _a.sent();
                            if (product !== null) {
                                res.json(product);
                            }
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        else {
            res.json({});
        }
    });
    // 更新产品
    app.post('/api/updateProduct/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        var body = req.body;
        if (req.params.id != 0) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, models_1.ProductModel.findByIdAndUpdate({ _id: id }, {
                                $set: {
                                    name: body.name,
                                    price: body.price,
                                    unit: body.unit,
                                    banner: body.banner,
                                    code: body.code,
                                    desc: body.desc,
                                    pro_status: body.pro_status,
                                    origin_price: body.origin_price,
                                    origin_price_unit: body.origin_price_unit
                                }
                            }).exec()];
                        case 1:
                            _a.sent();
                            res.json({ code: 0, msg: 'done' });
                            return [2 /*return*/];
                    }
                });
            }); })();
        }
        else {
            res.json([]);
        }
    });
    // 删除商品
    app.get('/api/delete/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opt, productList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.ProductModel.findByIdAndUpdate(id, {
                            pro_status: 1000
                        })];
                    case 1:
                        _a.sent();
                        opt = {
                            path: 'banner',
                            select: 'path'
                        };
                        return [4 /*yield*/, models_1.ProductModel.find().populate(opt).sort({
                                createdAt: -1
                            })];
                    case 2:
                        productList = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'done',
                            data: productList
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 添加订单
    app.get('/api/order/add', function (req, res) {
        var body = {};
        body['products'] = req.query.products;
        body['sumPrice'] = req.query.sumPrice;
        body['customer'] = req.query.customer; // 下单用户_id
        body['sn'] = 'YK' + new Date().getTime();
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.OrderModel.create(body)];
                    case 1:
                        order = _a.sent();
                        res.json({
                            code: 0, msg: 'success', data: {
                                sn: order._id,
                                no: body['sn']
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 订单列表
    app.get('/api/order/list', function (req, res) {
        var id = null;
        var orders;
        var page = req.query.q || 1;
        var limit = 10;
        var skip = (page - 1) * limit;
        var keywords = req.query.keywords || '';
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var total, allOrders, allOrders, allOrders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        total = 0;
                        if (!(req.query.id != null)) return [3 /*break*/, 3];
                        // app
                        id = new ObjectId(req.query.id);
                        return [4 /*yield*/, models_1.OrderModel.find({
                                customer: id,
                                status: { $lt: 1000 }
                            }).skip(skip).limit(limit).sort({ createdAt: -1 }).exec()];
                    case 1:
                        orders = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find({
                                customer: id,
                                status: { $lt: 1000 }
                            })];
                    case 2:
                        allOrders = _a.sent();
                        total = allOrders.length;
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(keywords == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, models_1.OrderModel.find({
                            // status: {$gte: 1}
                            }).skip(skip).limit(limit).sort({ createdAt: -1, status: -1 }).exec()];
                    case 4:
                        // 列表
                        orders = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find().exec()];
                    case 5:
                        allOrders = _a.sent();
                        total = allOrders.length;
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, models_1.OrderModel.find({
                            sn: new RegExp(keywords, 'i'),
                        }).skip(skip).limit(limit).sort({ createdAt: -1, status: -1 }).exec()];
                    case 7:
                        // 测试jenkins
                        // search
                        orders = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find({
                                sn: new RegExp(keywords, 'i'),
                            }).exec()];
                    case 8:
                        allOrders = _a.sent();
                        total = allOrders.length;
                        _a.label = 9;
                    case 9:
                        res.json({
                            code: 0,
                            msg: 'success',
                            orders: orders,
                            total: total
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 订单详情
    app.get('/api/order/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        var opt = [{
                path: 'address'
            }];
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.OrderModel.find({
                            _id: id
                        }).populate(opt).exec()];
                    case 1:
                        order = _a.sent();
                        res.json({
                            code: 0,
                            data: order
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 修改订单收货地址
    app.get('/api/order/change-address/:sn/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, sn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = new ObjectId(req.params.id);
                    sn = new ObjectId(req.params.sn);
                    return [4 /*yield*/, models_1.OrderModel.findByIdAndUpdate(sn, { address: id }).exec()];
                case 1:
                    _a.sent();
                    res.json({
                        code: 0,
                        msg: 'success'
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // 删除订单
    app.get('/api/order/del/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.OrderModel.findOne({ _id: id }).exec()];
                    case 1:
                        order = _a.sent();
                        if (!(order['status'] == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, models_1.OrderModel.findByIdAndUpdate(id, {
                                status: 1000
                            }).exec()];
                    case 2:
                        _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        res.json({
                            code: 1000,
                            msg: '删除失败，订单正在交易状态！'
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    });
    // 更改为己付款
    app.get('/api/order/confirm_order/:id/:payway', function (req, res) {
        var id = req.params['id'];
        var payWay = req.params['payway'];
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var order, out_trade_no;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.OrderModel.findOne({
                            _id: new ObjectId(id)
                        }).exec()];
                    case 1:
                        order = _a.sent();
                        // 更改为己付款
                        order['status'] = 1;
                        order['payway'] = payWay;
                        return [4 /*yield*/, order.save()];
                    case 2:
                        _a.sent();
                        // 查询成功付款的的支付时间
                        if (payWay == 1) {
                            out_trade_no = order['sn'];
                            wxPay.queryOrder(out_trade_no).then(function (json) {
                                order['transaction_id'] = json['transaction_id'];
                                order['wx_time_end'] = json['wx_time_end'];
                                order.save();
                            });
                        }
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 更改为己发货
    app.get('/api/order/send/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var order, customer, user, code, product, code, admin, smsClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.OrderModel.findOne({
                            _id: id
                        }).exec()];
                    case 1:
                        order = _a.sent();
                        // 更改为己发货状态
                        order.status = 2;
                        order.save();
                        customer = order.customer;
                        return [4 /*yield*/, models_1.CustomModel.findOne({
                                _id: new ObjectId(customer)
                            }).exec()];
                    case 2:
                        user = _a.sent();
                        if (order.type == 0) {
                            code = Math.ceil(order.sumPrice);
                            // 更改用户积分
                            user.code += code;
                            user.save();
                        }
                        else if (order.type == 1) {
                            product = JSON.parse(order.products);
                            code = product[0].price * product[0].orderNum;
                            // 更改用户积分
                            user.code -= code;
                            user.save();
                        }
                        return [4 /*yield*/, models_1.CustomModel.findOne({
                                is_admin: 1
                            }).exec()];
                    case 3:
                        admin = _a.sent();
                        //发送通知
                        return [4 /*yield*/, models_1.NotificationModel.create({
                                content: '您的订单：' + order.sn + ' 己发货，由快递配送，请注意查收！非常感谢您的订购，祝生活愉快！',
                                fromUser: admin._id,
                                toUser: customer
                            })];
                    case 4:
                        //发送通知
                        _a.sent();
                        smsClient = new SMSClient({ accessKeyId: conf_1.accessKeyId, secretAccessKey: conf_1.secretAccessKey });
                        //发送短信
                        return [4 /*yield*/, smsClient.sendSMS({
                                PhoneNumbers: user.phone,
                                SignName: '广西盈垦',
                                TemplateCode: 'SMS_133979691',
                                TemplateParam: JSON.stringify({ sn: order.sn }) //短信模板的数据
                            }).then(function (data) {
                                var Code = data['Code'];
                                if (Code === 'OK') {
                                    //处理返回参数
                                    // res.send(data);
                                }
                            }, function (err) {
                                if (err) {
                                    console.log(err);
                                }
                            })];
                    case 5:
                        //发送短信
                        _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 发送通知
    app.get('/api/notification/create/:content/:from/:to', function (req, res) {
        var content = req.params.content;
        var fromUser = new ObjectId(req.params.from);
        var toUser = new ObjectId(req.params.to);
        // console.log('content:' + content, 'fromUser: '+ fromUser, 'toUser:' + toUser);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //发送通知
                    return [4 /*yield*/, models_1.NotificationModel.create({
                            content: content,
                            fromUser: fromUser,
                            toUser: toUser
                        })];
                    case 1:
                        //发送通知
                        _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 通知列表
    app.get('/api/notification', function (req, res) {
        var userId = new ObjectId(req.query.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.NotificationModel.find({
                            toUser: userId,
                            status: 0
                        }).sort({
                            createdAt: -1
                        }).exec()];
                    case 1:
                        list = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: list
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 未读通知
    app.get('/api/notification/unread', function (req, res) {
        var userId = new ObjectId(req.query.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.NotificationModel.find({
                            toUser: userId,
                            status: 0,
                            read: 0
                        }).sort({
                            createdAt: -1
                        }).exec()];
                    case 1:
                        list = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: list
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 删除通知
    app.get('/api/notification/delete', function (req, res) {
        var id = new ObjectId(req.query.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var item, unRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.NotificationModel.findOne({
                            _id: id
                        }).exec()];
                    case 1:
                        item = _a.sent();
                        item.status = 1;
                        item.save();
                        return [4 /*yield*/, models_1.NotificationModel.find({
                                toUser: new ObjectId(req.query.userId),
                                status: 0,
                                read: 0
                            }).exec()];
                    case 2:
                        unRead = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: { unReadNum: unRead.length }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 阅读通知
    app.get('/api/notification/read', function (req, res) {
        var id = new ObjectId(req.query.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var item, unRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.NotificationModel.findOne({
                            _id: id
                        }).exec()];
                    case 1:
                        item = _a.sent();
                        item.read = 1;
                        item.save();
                        return [4 /*yield*/, models_1.NotificationModel.find({
                                toUser: new ObjectId(req.query.userId),
                                status: 0,
                                read: 0
                            }).exec()];
                    case 2:
                        unRead = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: { unReadNum: unRead.length - 1 }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 后台首页
    app.get('/api/dashboard', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var product_sun, product_0_sun, product_1_sun, order_sun, year, month, day, order_today, order_status_1, order_status_0, user_sun, user_today;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.ProductModel.find().count()];
                    case 1:
                        product_sun = _a.sent();
                        return [4 /*yield*/, models_1.ProductModel.find({
                                pro_status: 0
                            }).count()];
                    case 2:
                        product_0_sun = _a.sent();
                        return [4 /*yield*/, models_1.ProductModel.find({
                                pro_status: 1
                            }).count()];
                    case 3:
                        product_1_sun = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find().count()];
                    case 4:
                        order_sun = _a.sent();
                        year = new Date().getFullYear();
                        month = new Date().getMonth() + 1;
                        day = new Date().getDate();
                        return [4 /*yield*/, models_1.OrderModel.find({
                                createdAt: {
                                    $gte: new Date(year + '-' + month + '-' + day + ' 00:00:00'),
                                    $lt: new Date(year + '-' + month + '-' + day + ' 23:59:59')
                                }
                            }).count()];
                    case 5:
                        order_today = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find({
                                status: 1
                            }).count()];
                    case 6:
                        order_status_1 = _a.sent();
                        return [4 /*yield*/, models_1.OrderModel.find({
                                status: 0
                            }).count()];
                    case 7:
                        order_status_0 = _a.sent();
                        return [4 /*yield*/, models_1.CustomModel.find().count()];
                    case 8:
                        user_sun = _a.sent();
                        return [4 /*yield*/, models_1.CustomModel.find({
                                createdAt: {
                                    $gte: new Date(year + '-' + month + '-' + day + ' 00:00:00'),
                                    $lt: new Date(year + '-' + month + '-' + day + ' 23:59:59')
                                }
                            }).count()];
                    case 9:
                        user_today = _a.sent();
                        res.json({
                            code: 0,
                            data: {
                                product_sun: product_sun,
                                product_0_sun: product_0_sun,
                                product_1_sun: product_1_sun,
                                order_sun: order_sun,
                                order_today: order_today,
                                order_status_0: order_status_0,
                                order_status_1: order_status_1,
                                user_sun: user_sun,
                                user_today: user_today // 今日新增用户
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 获取管理的id
    app.get('/api/get_admin_id', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var admin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.CustomModel.findOne({
                            is_admin: 1
                        }).exec()];
                    case 1:
                        admin = _a.sent();
                        res.json({
                            code: 0,
                            data: admin
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 积分兑换订单
    app.post('/api/update_code', function (req, res) {
        var id = req.body.id;
        var product = req.body.product;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var body, order, admin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {};
                        body['products'] = '[' + JSON.stringify(product) + ']';
                        body['sumPrice'] = 0;
                        body['customer'] = id;
                        body['sn'] = 'YK' + new Date().getTime();
                        body['type'] = 1;
                        return [4 /*yield*/, models_1.OrderModel.create(body)];
                    case 1:
                        order = _a.sent();
                        return [4 /*yield*/, models_1.CustomModel.findOne({
                                is_admin: 1
                            }).exec()];
                    case 2:
                        admin = _a.sent();
                        //发送通知
                        return [4 /*yield*/, models_1.NotificationModel.create({
                                content: '我们己经收到您的订单：' + body['sn'] + ' 非常感谢您的订购，我们会尽快为您处理，祝生活愉快！',
                                fromUser: admin._id,
                                toUser: id
                            })];
                    case 3:
                        //发送通知
                        _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: order
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 保存问题
    app.post('/api/admin/saveQuestion', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.QuestionsModel.create(body)];
                    case 1:
                        _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 所有问题
    app.get('/api/admin/questions-list', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.QuestionsModel.find().populate({
                            path: 'files'
                        }).sort({
                            createdAt: -1
                        }).exec()];
                    case 1:
                        list = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: list
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 查询问题
    app.get('/api/admin/question/:id', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var id, question;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = new ObjectId(req.params.id);
                        return [4 /*yield*/, models_1.QuestionsModel.findOne({
                                _id: id
                            }).populate({
                                path: 'files'
                            }).sort({ status: -1 }).exec()];
                    case 1:
                        question = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: question
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 更新问题
    app.post('/api/admin/updateQuestion', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var id, question;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = new ObjectId(body.id);
                        return [4 /*yield*/, models_1.QuestionsModel.findByIdAndUpdate(id, {
                                $set: {
                                    dealCate: body.dealCate,
                                    dealDesc: body.dealDesc,
                                    status: 1
                                }
                            }).exec()];
                    case 1:
                        question = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: question
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 保存版本
    app.post('/api/admin/save/version', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.VersionModel.findOne().exec()];
                    case 1:
                        version = _a.sent();
                        if (!(version == null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, models_1.VersionModel.create(body)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        version['versionNumber'] = body.versionNumber;
                        version['androidUrl'] = body.androidUrl;
                        version['iosUrl'] = body.iosUrl;
                        version['desc'] = body.desc;
                        return [4 /*yield*/, version.save()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 获取版本
    app.get('/api/admin/get/version', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.VersionModel.findOne().exec()];
                    case 1:
                        version = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            data: version
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    // 添加收货地址
    app.post('/api/user/address', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var body, userId, address;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = req.body;
                    userId = new ObjectId(body.userId);
                    return [4 /*yield*/, models_1.AddressModel.findOne({ userId: userId }).exec()];
                case 1:
                    address = _a.sent();
                    if (address == null) {
                        body.is_default = 1;
                    }
                    else {
                        body.is_default = 0;
                    }
                    if (!(body.id != undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, models_1.AddressModel.findByIdAndUpdate(body.id, body)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, models_1.AddressModel.create(body)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    res.json({
                        code: 0,
                        msg: 'success'
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // 获取用户收货地址列表
    app.get('/api/user/address-list', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userId, address;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = new ObjectId(req.query.userId);
                    return [4 /*yield*/, models_1.AddressModel.find({ userId: userId }).exec()];
                case 1:
                    address = _a.sent();
                    res.json({
                        code: 0,
                        msg: 'success',
                        data: address
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // 更新默认收货地址
    app.get('/api/user/address/be-default', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userId, addressId, list;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = new ObjectId(req.query.userId);
                    addressId = new ObjectId(req.query.addressId);
                    return [4 /*yield*/, models_1.AddressModel.update({ userId: userId, is_default: 1 }, {
                            is_default: 0
                        }).exec()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, models_1.AddressModel.update({ _id: addressId }, {
                            is_default: 1
                        }).exec()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, models_1.AddressModel.find({ userId: userId }).exec()];
                case 3:
                    list = _a.sent();
                    res.json({
                        code: 0,
                        msg: 'success',
                        data: list
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // 删除收货地址
    app.get('/api/user/del-address', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = new ObjectId(req.query.id);
                    return [4 /*yield*/, models_1.AddressModel.findById(id).remove()];
                case 1:
                    _a.sent();
                    res.json({
                        code: 0,
                        msg: 'success'
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    // 获取用户默认收货地址
    app.get('/api/user/default-address', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var userId, address;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = new ObjectId(req.query.userId);
                    return [4 /*yield*/, models_1.AddressModel.findOne({ userId: userId, is_default: 1 }).exec()];
                case 1:
                    address = _a.sent();
                    res.json({
                        code: 0,
                        msg: 'success',
                        data: address
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.productRouter = productRouter;
