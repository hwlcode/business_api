"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../node_modules/@types/mongoose/index.d.ts"/>
var mongoose = require("mongoose");
var db = '';
if (process.env.NODE_ENV === 'production') {
    db = 'mongodb://127.0.0.1:27027/aniu';
}
else {
    db = 'mongodb://127.0.0.1:27017/aniu';
}
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
require('./schema/notification');
require('./schema/admin');
require('./schema/questions');
require('./schema/version');
var BannerModel = mongoose.model('Banner');
exports.BannerModel = BannerModel;
var CustomModel = mongoose.model('User');
exports.CustomModel = CustomModel;
var ProductModel = mongoose.model('Product');
exports.ProductModel = ProductModel;
var ImagesModel = mongoose.model('Images');
exports.ImagesModel = ImagesModel;
var OrderModel = mongoose.model('Order');
exports.OrderModel = OrderModel;
var NotificationModel = mongoose.model('Notification');
exports.NotificationModel = NotificationModel;
var AdminModel = mongoose.model('admin');
exports.AdminModel = AdminModel;
var QuestionsModel = mongoose.model('questions');
exports.QuestionsModel = QuestionsModel;
var VersionModel = mongoose.model('versions');
exports.VersionModel = VersionModel;
