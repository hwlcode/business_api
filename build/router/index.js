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
var Models = require("../models");
var ObjectId = require('mongodb').ObjectID;
function productRouter(app) {
    var _this = this;
    app.post('/api/saveProduct', function (req, res) {
        var body = req.body;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Models.ProductModel.create(body)];
                    case 1:
                        _a.sent();
                        res.json({ code: 0, msg: 'success' });
                        return [2 /*return*/];
                }
            });
        }); })();
    });
    app.get('/api/productList', function (req, res) {
        var page = parseInt(req.query.q) || 1;
        var limit = 3;
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
                        return [4 /*yield*/, Models.ProductModel.find().populate(opt).skip(skip).limit(limit).sort({
                                createdAt: -1
                            })];
                    case 1:
                        productList = _a.sent();
                        return [4 /*yield*/, Models.ProductModel.find()];
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
    app.get('/api/search', function (req, res) {
        var keywords = req.query.keywords || '';
        var pattern = new RegExp(keywords, "i");
        var page = parseInt(req.query.keywords) || 1;
        var limit = 3;
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
                        return [4 /*yield*/, Models.ProductModel.find({
                                name: pattern
                            }).populate(opt).skip(skip).limit(limit).sort({
                                createdAt: -1
                            })];
                    case 1:
                        productList = _a.sent();
                        return [4 /*yield*/, Models.ProductModel.find()];
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
    app.get('/api/product/:id', function (req, res) {
        if (req.params.id != 0) {
            var id_1 = new ObjectId(req.params.id);
            (function () { return __awaiter(_this, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Models.ProductModel.findOne({ _id: id_1 }).exec()];
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
    app.post('/api/updateProduct/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        var body = req.body;
        if (req.params.id != 0) {
            (function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Models.ProductModel.findByIdAndUpdate({ _id: id }, {
                                $set: {
                                    name: body.name,
                                    price: body.price,
                                    banner: body.banner
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
    app.get('/api/delete/:id', function (req, res) {
        var id = new ObjectId(req.params.id);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var opt, productList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Models.ProductModel.findOne({ _id: id }).remove()];
                    case 1:
                        _a.sent();
                        opt = {
                            path: 'banner',
                            select: 'path'
                        };
                        return [4 /*yield*/, Models.ProductModel.find().populate(opt).sort({
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
}
exports.productRouter = productRouter;
