"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String, default: null },
    sex: { type: String, default: null },
    birth: { type: String, default: null },
    phone: { type: String, default: null },
    address: [{ type: Schema.Types.ObjectId, default: null, ref: 'Address' }],
    avatar: { type: Schema.Types.ObjectId, default: null, ref: 'Images' },
    orders: [{ type: Schema.Types.ObjectId, default: null, ref: 'Order' }],
    code: { type: Number, default: 0 },
    is_admin: { type: Number, default: 0 }
}, {
    timestamps: true
});
UserSchema.plugin(findOrCreate);
mongoose.model('User', UserSchema);
