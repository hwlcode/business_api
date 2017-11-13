"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    sn: { type: String },
    products: [],
    sumPrice: { type: Number, default: 0 },
    status: { type: Number, default: 0 } //0: 己付款，1：己发货
}, {
    timestamps: true
});
mongoose.model('Order', OrderSchema);
