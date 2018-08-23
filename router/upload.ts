import * as Models from '../models'
import * as multer from 'multer'

// 单文件上传
function uploaderRouter(app) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //目录要手动创建
            cb(null, './public/uploads')
        },
        //给上传文件重命名，获取添加后缀名
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + "." + file.originalname.split('.')[1]);
        }
    });
    const upload = multer({
        storage: storage
    });

    app.post('/api/upload', upload.single('file'), function (req, res, next) {
        const file = req.file;
        (async () => {
            var img = await Models.ImagesModel.create({
                mimeType: file.mimetype,
                originalName: file.originalname,
                path: file.path.split('public')[1],
                size: file.size
            });

            res.send({
                ret_code: '0',
                id: img._id,
                path: img['path'],
                msg: 'success'
            });
        })();
    });
}

function uploaderAPKRouter(app) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //目录要手动创建
            cb(null, './public/apk')
        },
        //给上传文件重命名，获取添加后缀名
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + "." + file.originalname.split('.')[1]);
        }
    });
    const upload = multer({
        storage: storage
    });

    app.post('/api/upload/apk', upload.single('apk'), function (req, res, next) {
        const file = req.apk;
        console.log(file);
        (async () => {
            // var img = await Models.ImagesModel.create({
            //     mimeType: file.mimetype,
            //     originalName: file.originalname,
            //     path: 'http://127.0.0.1:9527' + file.path.split('public')[1],
            //     size: file.size
            // });
            //
            // res.send({
            //     ret_code: '0',
            //     id: img._id,
            //     path: img['path'],
            //     msg: 'success'
            // });
        })();
    });
}

// 多个文件上传
function multipleUploaderRouter(app) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            //目录要手动创建
            cb(null, './public/uploads')
        },
        //给上传文件重命名，获取添加后缀名
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + "." + file.originalname.split('.')[1]);
        }
    });
    const upload = multer({
        storage: storage
    });
    app.post('/api/multiple_upload', upload.array('file', 4), function (req, res, next) {
        const files = req.files;
        const fileArr = [];
        (async () => {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var obj = {};

                var img = await Models.ImagesModel.create({
                    mimeType: file.mimetype,
                    originalName: file.originalname,
                    path: 'http://127.0.0.1:9527' + file.path.split('public')[1],
                    size: file.size
                });

                obj['id'] = img._id;
                obj['path'] = 'http://127.0.0.1:9527' + file.path.split('public')[1];

                fileArr.push(obj);
            }

            res.json({
                code: 0,
                files: fileArr,
                msg: 'success'
            });
        })();
    });
}

export {uploaderRouter, multipleUploaderRouter, uploaderAPKRouter}

