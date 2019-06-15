import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    sn: {type: String},
    products: {type: String},
    sumPrice: {type: Number, default: 0},
    status: {type: Number, default: 0}, // 0：初始状态  1：己支付  2：己发货, 1000: 己删除
    customer: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: Number, default: 0},
    payway: {type: Number, default: 0}, // 0：支付宝 1：微信支付
    address: {type: Schema.Types.ObjectId, ref: 'Address'},
    transaction_id: {type: String, default: ''}, // 微信平台交易订单号
    wx_time_end: {type: String} // 微信平台交易完成时间
}, {
    timestamps: true
});

mongoose.model('Order', OrderSchema);
