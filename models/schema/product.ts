import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String},
    price: {type: String},
    banner: {type: Schema.Types.ObjectId, ref: 'Images'},
    code: {type: Number, default: 0},
    desc: {type: String}
}, {
    timestamps: true
});

mongoose.model('Product', ProductSchema);
