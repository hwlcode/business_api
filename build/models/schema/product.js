"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name: { type: String },
    price: { type: String },
    banner: { type: Schema.Types.ObjectId, ref: 'Images' }
}, {
    timestamps: true
});
mongoose.model('Product', ProductSchema);
