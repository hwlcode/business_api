import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let QuesionsSchema = new Schema({
    cate: {type: Number},
    title: {type: String},
    desc: {type: String},
    files: [{type: Schema.Types.ObjectId, ref: 'Images'}],
    status: {type: Number, default: 0},
    dealCate: {type: Number, default: 0},
    dealDesc: {type: String, default: null}
}, {
    timestamps: true
});

mongoose.model('questions', QuesionsSchema);
