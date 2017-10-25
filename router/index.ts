import * as Models from '../models';

const ObjectId = require('mongodb').ObjectID;

function productRouter(app) {
    app.post('/api/saveProduct', (req, res) => {
        const body = req.body;
        (async () => {
            await Models.ProductModel.create(body);
            res.json({code: 0, msg: 'success'});
        })();
    });

    app.get('/api/productList', (req, res) => {
        let page = parseInt(req.query.q) || 1;
        let limit = 3;
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

    app.get('/api/product/:id', (req, res) => {
        if (req.params.id != 0) {
            let id = new ObjectId(req.params.id);
            (async () => {
                const product = await Models.ProductModel.findOne({_id: id}).exec();
                if (product !== null) {
                    res.json(product);
                }
            })();
        } else {
            res.json({});
        }
    });

    app.post('/api/updateProduct/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        let body = req.body;
        if (req.params.id != 0) {
            (async () => {
                await Models.ProductModel.findByIdAndUpdate({_id: id}, {
                    $set: {
                        name: body.name,
                        price: body.price,
                        banner: body.banner
                    }
                }).exec();

                res.json({code: 0, msg: 'done'});
            })();
        } else {
            res.json([]);
        }
    });

    app.get('/api/delete/:id', (req, res) => {
        let id = new ObjectId(req.params.id);
        (async () => {
            await Models.ProductModel.findOne({_id: id}).remove();
            let opt = {
                path: 'banner',
                select: 'path'
            };
            const productList = await Models.ProductModel.find().populate(opt).sort({
                createdAt: -1
            });
            res.json({
                code: 0,
                msg: 'done',
                data: productList
            })
        })();
    })
}

export {productRouter}
