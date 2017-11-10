import * as Models from '../models';

const ObjectId = require('mongodb').ObjectID;

function webApiRouter(app) {
    app.get('/api/web/banners', (req, res) => {
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
    });
    app.get('/api/web/productList', (req, res) => {
        let page = parseInt(req.query.q) || 1;
        let limit = 10;
        let skip = (page - 1) * limit;
        (async () => {
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await Models.ProductModel.find().populate(opt).skip(skip).limit(limit).sort({
                createdAt: -1
            });
            const products = await Models.ProductModel.find();
            res.json({
                code: 0,
                msg: 'success',
                total: products.length,
                data: productList
            });
        })();
    });
}

export {webApiRouter}
