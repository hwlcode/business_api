import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String},
    price: {type: String},
    unit: {type: String, default: ''},
    banner: {type: Schema.Types.ObjectId, ref: 'Images'},
    code: {type: Number, default: 0},
    desc: {type: String},
    pro_status: {type: String, default: '0'}, // 0: 上架中， 1：己下架， 1000： 己删除
    origin_price: {type: String},
    origin_price_unit: {type: String},
    order_index: {type: Number, default: 1}
}, {
    timestamps: true
});

mongoose.model('Product', ProductSchema);
