"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../node_modules/@types/mongoose/index.d.ts"/>
var mongoose = require("mongoose");
var db = 'mongodb://127.0.0.1:27027/aniu';
mongoose.Promise = global.Promise;
mongoose.connect(db, { useMongoClient: true }, function (err) {
    if (err) {
        console.log('connect to %s error: ', db, err.message);
        process.exit(1);
    }
});
require('./schema/banner');
require('./schema/user');
require('./schema/product');
require('./schema/file');
require('./schema/order');
exports.BannerModel = mongoose.model('Banner');
exports.CustomModel = mongoose.model('User');
exports.ProductModel = mongoose.model('Product');
exports.ImagesModel = mongoose.model('Images');
exports.OrderModel = mongoose.model('Order');
