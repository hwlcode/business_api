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
        verifyCode = MathRand(6);
        if (verifyCode.length < 6) {
            verifyCode = verifyCode + '0';
        }
        var accessKeyId = 'LTAI4nllpXNPtH1z';
        var secretAccessKey = 'K3r32rZC2zBXVZneOrjrcuZQOd2Ocs';
        //初始化sms_client
        var smsClient = new SMSClient({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });
        //发送短信
        smsClient.sendSMS({
            PhoneNumbers: PhoneNumbers,
            SignName: '广西盈垦',
            TemplateCode: 'SMS_106955018',
            TemplateParam: '{"code":' + verifyCode + ',"product":"广西盈垦"}' //短信模板的数据
        }).then(function (res) {
            var Code = res.Code;
            if (Code === 'OK') {
                //处理返回参数
                res.json(res);
            }
        }, function (err) {
            if (err) {
                res.json({ code: 1, msg: '请求次数太频繁，请5分钟后再试！' });
            }
        });
    });
    app.post('/api/user/login', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opts, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(body.phoneCode == '111111')) return [3 /*break*/, 3];
                        opts = [{
                                path: 'avatar',
                                select: 'path'
                            }];
                        return [4 /*yield*/, Models.CustomModel.findOrCreate({
                                phone: body.phone
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Models.CustomModel.findOne({
                                phone: body.phone
                            }).populate(opts).exec(function (err, doc) {
                                res.json({
                                    code: 0,
                                    msg: 'success',
                                    data: doc
                                });
                            })];
                    case 2:
                        user = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        res.json({
                            code: 1,
                            msg: '验证码不正确，请输新输入'
                        });
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/profile', function (req, res) {
        var phone = req.query.phone;
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
                                phone: phone
                            }).populate(opts).exec(function (err, populatedDoc) {
                                res.json({
                                    code: 0,
                                    data: populatedDoc
                                });
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
        console.log(body);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Models.CustomModel.update({
                            phone: body.phone
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
}
exports.loginRouter = loginRouter;
