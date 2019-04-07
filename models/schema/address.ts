import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;


let AddressSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, default: null},
  address: {type: String, default: null},
  is_default: {type: Number, default: 0},
  name: {type: String, default: null},
  phone: {type: String, default: null},
  city: {type: String, default: null}
}, {
  timestamps: true
});

mongoose.model('Address', AddressSchema);
