"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var QuesionsSchema = new Schema({
    cate: { type: Number },
    title: { type: String },
    desc: { type: String },
    files: [{ type: Schema.Types.ObjectId, ref: 'Images' }],
    status: { type: Number, default: 0 },
    dealCate: { type: Number, default: 0 },
    dealDesc: { type: String, default: null }
}, {
    timestamps: true
});
mongoose.model('questions', QuesionsSchema);
