///<reference path="../node_modules/@types/mongoose/index.d.ts"/>
import * as mongoose from 'mongoose';

let db = '';
if (process.env.NODE_ENV === 'production') {
     db = 'mongodb://127.0.0.1:27027/aniu';
}else{
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

export const BannerModel = mongoose.model('Banner');
export const CustomModel = mongoose.model('User');
export const ProductModel = mongoose.model('Product');
export const ImagesModel = mongoose.model('Images');
export const OrderModel = mongoose.model('Order');
export const NotificationModel = mongoose.model('Notification');
export const AdminMode = mongoose.model('admin');
