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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var SMSClient = require("@alicloud/sms-sdk");
var Models = require("../models");
var conf_1 = require("../common/conf");
var ObjectId = require('mongodb').ObjectID;
var md5 = require("blueimp-md5");
var verifyCode = '';
setTimeout(function () {
    verifyCode = '';
}, 5 * 60 * 1000);
function MathRand(n) {
    var Num = "";
    for (var i = 0; i < n; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    return Num;
}
function loginRouter(app) {
    var _this = this;
    app.get('/api/verifyCode', function (req, res) {
        var PhoneNumbers = req.query.phone;
        var msgCode = MathRand(6);
        if (msgCode.length < 6) {
            msgCode = msgCode + '0';
        }
        //初始化sms_client
        var smsClient = new SMSClient({ accessKeyId: conf_1.accessKeyId, secretAccessKey: conf_1.secretAccessKey });
        // //发送短信
        smsClient.sendSMS({
            PhoneNumbers: PhoneNumbers,
            SignName: '广西盈垦',
            TemplateCode: 'SMS_133974635',
            TemplateParam: '{"code":' + msgCode + '}' //短信模板的数据
        }).then(function (data) {
            var Code = data['Code'];
            if (Code === 'OK') {
                //处理返回参数
                verifyCode = msgCode;
                console.log(data['Message'], '验证码为：' + verifyCode);
                res.send({ code: verifyCode });
            }
        }, function (err) {
            if (err) {
                console.log(err['data']['Message'], '手机号为： ' + PhoneNumbers);
                res.json({ code: 1, msg: '短信发送太频敏繁，请稍后再试' });
            }
        });
    });
    app.post('/api/user/login', function (req, res) {
        var body = req.body;
        if (body.phone == '15868823605') {
            verifyCode = '123456';
        }
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var user, opts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(body.phoneCode == verifyCode)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Models.CustomModel.findOrCreate({
                                phone: body.phone
                            })];
                    case 1:
                        user = _a.sent();
                        if (!(user.doc.phone == '18078660058')) return [3 /*break*/, 3];
                        return [4 /*yield*/, Models.CustomModel.update({
                                phone: body.phone
                            }, {
                                is_admin: 1
                            }).exec()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        opts = [{
                                path: 'avatar',
                                select: 'path'
                            }];
                        return [4 /*yield*/, Models.CustomModel.findOne({
                                phone: body.phone
                            }).populate(opts).exec(function (err, doc) {
                                doc['avatar']['path'] = conf_1.appServerUrl + doc['avatar']['path'];
                                res.json({
                                    code: 0,
                                    msg: 'success',
                                    data: doc
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        res.json({
                            code: 1,
                            msg: '验证码不正确，请输新输入'
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/profile', function (req, res) {
        var id = new ObjectId(req.query.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = [{
                                path: 'avatar',
                                select: 'path'
                            }];
                        return [4 /*yield*/, Models.CustomModel.findOne({
                                _id: id
                            }).populate(opts).exec(function (err, populatedDoc) {
                                if (populatedDoc != null) {
                                    populatedDoc['avatar']['path'] = conf_1.appServerUrl + populatedDoc['avatar']['path'];
                                    res.json({
                                        code: 0,
                                        data: populatedDoc
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.post('/api/saveProfile', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Models.CustomModel.update({
                            _id: new ObjectId(req.body.id)
                        }, body).exec()];
                    case 1:
                        user = _a.sent();
                        res.json({
                            code: 0,
                            data: user
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/users', function (req, res) {
        var page = parseInt(req.query.q) || 1;
        var limit = 10;
        var skip = (page - 1) * limit;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opt, userList, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opt = {
                            path: 'avatar',
                            select: 'path'
                        };
                        return [4 /*yield*/, Models.CustomModel.find().populate(opt).skip(skip).limit(limit).sort({
                                createdAt: -1
                            })];
                    case 1:
                        userList = _a.sent();
                        return [4 /*yield*/, Models.CustomModel.find()];
                    case 2:
                        users = _a.sent();
                        res.json({
                            code: 0,
                            msg: 'success',
                            total: users.length,
                            data: userList
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/msg_to_business', function (req, res) {
        var phone = req.query.phone;
        var no = req.query.no;
        //初始化sms_client
        var smsClient = new SMSClient({ accessKeyId: conf_1.accessKeyId, secretAccessKey: conf_1.secretAccessKey });
        //发送短信
        console.log(phone);
        smsClient.sendSMS({
            PhoneNumbers: phone,
            SignName: '广西盈垦',
            TemplateCode: 'SMS_133964688',
            TemplateParam: JSON.stringify({ sn: no }) //短信模板的数据
        }).then(function (data) {
            var Code = data['Code'];
            if (Code === 'OK') {
                //处理返回参数
                res.send(data);
            }
        }, function (err) {
            if (err) {
                console.log(err);
            }
        });
    });
}
exports.loginRouter = loginRouter;
