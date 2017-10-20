import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String},
    price: {type: String},
    pic: {type: String}
}, {
    timestamps: true
});

mongoose.model('Product', ProductSchema);
