import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let BannerSchema = new Schema({
    name: {type: String},
    pic: {type: String},
    link: {type: String}
}, {
    timestamps: true
});

mongoose.model('Banner', BannerSchema);
