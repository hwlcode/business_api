"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BannerSchema = new Schema({
    name: { type: String },
    banner: { type: Schema.Types.ObjectId, ref: 'Images' },
    link: { type: String }
}, {
    timestamps: true
});
mongoose.model('Banner', BannerSchema);
