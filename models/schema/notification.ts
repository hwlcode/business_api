import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let NotificationSchema = new Schema({
    content: {type: String},
    fromUser: {type: Schema.Types.ObjectId, ref: 'User'},
    toUser: {type: Schema.Types.ObjectId, ref: 'User'},
    status: {type: Number, default: 0},
    read: {type: Number, default: 0}
}, {
    timestamps: true
});

mongoose.model('Notification', NotificationSchema);
