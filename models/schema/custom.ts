import * as mongoose from 'mongoose';
import * as findOrCreate from 'mongoose-findorcreate';
const Schema = mongoose.Schema;


let CustomSchema = new Schema({
    name: {type: String, default: null},
    sex: {type: String, default: null},
    birth: {type: String, default: null},
    phone: {type: String, default: null},
    address: {type: String, default: null},
    avatar: {type: Schema.Types.ObjectId, default: null, ref: 'Images'},
    orders: [{type: Schema.Types.ObjectId, default: null, ref: 'Order'}],
    code: {type: Number, default: 0}
}, {
    timestamps: true
});
CustomSchema.plugin(findOrCreate);
mongoose.model('Custom', CustomSchema);
