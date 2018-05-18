"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var router_1 = require("./router");
var upload_1 = require("./router/upload");
var banner_1 = require("./router/banner");
var login_1 = require("./router/login");
var web_1 = require("./router/web");
var alipay_1 = require("./router/alipay");
var admin_1 = require("./router/admin");
var app = express();
//middleware
app.use('/', express.static(path.join(__dirname, '..', 'public'))); //静态资源存放目录
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//router
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
router_1.productRouter(app);
upload_1.uploaderRouter(app);
banner_1.bannerRouter(app);
login_1.loginRouter(app);
web_1.webApiRouter(app);
alipay_1.alipayRouter(app);
admin_1.AdminRouter(app);
if (process.env.NODE_ENV === 'production') {
    app.listen(8000, 'localhost', function () {
        console.log('app is running at pro http://localhost:8000');
    });
}
else {
    app.listen(9527, 'localhost', function () {
        console.log('app is running at dev http://localhost:9527');
    });
}
