///<reference path="../node_modules/@types/mongoose/index.d.ts"/>
import * as mongoose from 'mongoose';

let db = '';
if (process.env.NODE_ENV === 'production') {
    db = 'mongodb://127.0.0.1:27027/aniu';
} else {
    db = 'mongodb://127.0.0.1:27017/aniu';
}

(mongoose as any).Promise = global.Promise;
mongoose.connect(db, {useMongoClient: true}, err => {
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

const BannerModel = mongoose.model('Banner');
const CustomModel = mongoose.model('User');
const ProductModel = mongoose.model('Product');
const ImagesModel = mongoose.model('Images');
const OrderModel = mongoose.model('Order');
const NotificationModel = mongoose.model('Notification');
const AdminModel = mongoose.model('admin');
const QuestionsModel = mongoose.model('questions');
const VersionModel = mongoose.model('versions');

export {
    BannerModel,
    CustomModel,
    ProductModel,
    ImagesModel,
    OrderModel,
    NotificationModel,
    AdminModel,
    QuestionsModel,
    VersionModel
}
