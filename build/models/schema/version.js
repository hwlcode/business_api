"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var VersionSchema = new Schema({
    versionNumber: { type: String, default: null },
    iosUrl: { type: String, default: null },
    androidUrl: { type: String, default: null },
    desc: { type: String, default: null }
}, {
    timestamps: true
});
mongoose.model('versions', VersionSchema);
