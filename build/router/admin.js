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
var models_1 = require("../models");
var MD5 = require("ts-md5");
var ObjectId = require('mongodb').ObjectID;
function AdminRouter(app) {
    var _this = this;
    app.post('/api/admin/saveAdmin', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.AdminModel.findOne({
                            phone: body.phone
                        }).exec()];
                    case 1:
                        user = _a.sent();
                        if (!(user == null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, models_1.AdminModel.create(body)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        res.json({
                            code: 0,
                            msg: 'success'
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/admin/admin-list', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.AdminModel.find().sort({
                            created: -1
                        }).exec()];
                    case 1:
                        users = _a.sent();
                        res.json({
                            code: 0,
                            data: {
                                users: users
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/admin/delete/:id', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var id, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = new ObjectId(req.params.id);
                        return [4 /*yield*/, models_1.AdminModel.remove({ _id: id })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, models_1.AdminModel.find().sort({
                                created: -1
                            }).exec()];
                    case 2:
                        users = _a.sent();
                        res.json({
                            code: 0,
                            data: {
                                users: users
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/admin/get_admin_user/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.AdminModel.find({
                            _id: id
                        }).exec()];
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
    app.post('/api/admin/update_password', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var body, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        id = new ObjectId(body.id);
                        return [4 /*yield*/, models_1.AdminModel.findByIdAndUpdate({
                                _id: id
                            }, {
                                $set: {
                                    password: body.newPassword
                                }
                            }, function (err, raw) {
                                console.log(err, raw);
                            })];
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
    app.post('/api/admin/login', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var body, user, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        return [4 /*yield*/, models_1.AdminModel.findOne({
                                phone: body.userName
                            }).exec()];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            res.json({
                                code: 1000,
                                msg: '用户名或密码不正确，请重新输入'
                            });
                        }
                        else {
                            if (user['password'] == body.password) {
                                hash = MD5.Md5.hashStr(body.userName + '' + new Date().getTime()).toString();
                                user['token'] = hash;
                                user.save();
                                res.json({
                                    code: 0,
                                    msg: '登录成功',
                                    token: hash
                                });
                            }
                            else {
                                res.json({
                                    code: 1000,
                                    msg: '用户名或密码不正确，请重新输入'
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/admin/logout', function (req, res) {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var usr, token, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usr = req.query.usr;
                        token = req.query.token;
                        return [4 /*yield*/, models_1.AdminModel.findOne({
                                phone: usr
                            }).exec()];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            res.json({
                                code: 1000,
                                msg: '未知错误'
                            });
                        }
                        else {
                            if (token == user['token']) {
                                user['token'] = null;
                                user.save();
                                res.json({
                                    code: 0,
                                    msg: '登出成功'
                                });
                            }
                            else {
                                res.json({
                                    code: 0,
                                    msg: '无效的_token'
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); })();
    });
}
exports.AdminRouter = AdminRouter;
