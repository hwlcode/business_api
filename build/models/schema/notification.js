"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var NotificationSchema = new Schema({
    content: { type: String },
    fromUser: { type: Schema.Types.ObjectId, ref: 'User' },
    toUser: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});
mongoose.model('Notification', NotificationSchema);
