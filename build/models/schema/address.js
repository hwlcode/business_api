"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var AddressSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, default: null },
    address: { type: String, default: null },
    is_default: { type: Number, default: 0 },
    name: { type: String, default: null },
    phone: { type: String, default: null },
    city: { type: String, default: null }
}, {
    timestamps: true
});
mongoose.model('Address', AddressSchema);
