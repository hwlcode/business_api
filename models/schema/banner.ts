import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let BannerSchema = new Schema({
    name: {type: String},
    banner: {type: Schema.Types.ObjectId, ref: 'Images'},
    link: {type: String}
}, {
    timestamps: true
});

mongoose.model('Banner', BannerSchema);
