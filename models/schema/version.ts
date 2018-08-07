import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

let VersionSchema = new Schema({
    versionNumber: {type: String, default: null},
    iosUrl: {type: String, default: null},
    androidUrl: {type: String, default: null},
    desc: {type: String, default: null}
}, {
    timestamps: true
});

mongoose.model('versions', VersionSchema);
