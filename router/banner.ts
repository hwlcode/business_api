import * as Models from '../models';

const ObjectId = require('mongodb').ObjectID;

function bannerRouter(app){
    app.post('/api/saveBanner', (req, res) => {
        const body = req.body;
        (async () => {
            await Models.BannerModel.create(body);
            res.json({code: 0, msg: 'success'});
        })();
    });

    app.get('/api/banners', (req, res) => {
        let page = parseInt(req.query.q) || 1;
        let limit = 3;
        let skip = (page - 1) * limit;
        (async () => {
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const bannerList = await Models.BannerModel.find().populate(opt).skip(skip).limit(limit).sort({
                createdAt: -1
            });
            const banners = await Models.BannerModel.find();
            res.json({
                code: 0,
                msg: 'success',
                total: banners.length,
                data: bannerList
            });
        })();
    })

    app.get('/api/banner/delete/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        (async () => {
            await Models.BannerModel.findOne({_id: id}).remove();
            let opt = {
                path: 'banner',
                select: 'path'
            };

            const bannerList = await Models.BannerModel.find().populate(opt).sort({
                createdAt: -1
            });
            res.json({
                code: 0,
                msg: 'done',
                data: bannerList
            })
        })();
    })
}

export {bannerRouter}
