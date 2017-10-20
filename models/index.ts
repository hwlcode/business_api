import * as mongoose from 'mongoose';

const db = 'mongodb://127.0.0.1:27017/aniu';
mongoose.connect(db, {useMongoClient: true}, err => {
    if(err){
        console.log('connect to %s error: ', db, err.message);
        process.exit(1);
    }
});

module.exports = {
    
}
