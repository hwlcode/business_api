"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    sn: { type: String },
    products: { type: String },
    sumPrice: { type: Number, default: 0 },
    status: { type: Number, default: 0 },
    customer: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: Number, default: 0 }
}, {
    timestamps: true
});
mongoose.model('Order', OrderSchema);
