import * as mongoose from 'mongoose';
import * as findOrCreate from 'mongoose-findorcreate';

const Schema = mongoose.Schema;

let AdminSchema = new Schema({
    phone: {type: String},
    password: {type: String},
    token: {type: String, default: null}
}, {
    timestamps: true
});

AdminSchema.plugin(findOrCreate);
mongoose.model('admin', AdminSchema);
