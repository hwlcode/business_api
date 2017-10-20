import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let CustomSchema = new Schema({
    name: {type: String},
    sex: {type: String},
    birth: {type: String},
    phone: {type: String},
    address: {type: String},
    orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    code: {type: Number, default: 0}
}, {
    timestamps: true
});

mongoose.model('Custom', CustomSchema);
