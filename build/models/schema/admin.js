"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");
var Schema = mongoose.Schema;
var AdminSchema = new Schema({
    phone: { type: String },
    password: { type: String },
    token: { type: String, default: null }
}, {
    timestamps: true
});
AdminSchema.plugin(findOrCreate);
mongoose.model('admin', AdminSchema);
