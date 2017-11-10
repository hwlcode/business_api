import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    sn: {type: String},
    products: [
        // {
        //     product: {type: Schema.Types.ObjectId, ref: 'Product'},
        //     num: {type: Number, default:0}
        // }
    ],
    sumPrice: {type: Number, default: 0},
    status: {type: Number, default: 0} //0: 己付款，1：己发货
}, {
    timestamps: true
});

mongoose.model('Order', OrderSchema);
