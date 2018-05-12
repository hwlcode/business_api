"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: { type: String },
    price: { type: String },
    unit: { type: String, default: '' },
    banner: { type: Schema.Types.ObjectId, ref: 'Images' },
    code: { type: Number, default: 0 },
    desc: { type: String }
}, {
    timestamps: true
});
mongoose.model('Product', ProductSchema);
