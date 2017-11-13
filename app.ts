import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'

import {productRouter} from './router'
import {uploaderRouter} from './router/upload'
import {bannerRouter} from './router/banner'
import {loginRouter} from './router/login'
import {webApiRouter} from './router/web';

const app = express();

//middleware
app.use('/', express.static(path.join(__dirname, '..', 'public'))); //静态资源存放目录
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//router
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
productRouter(app);
uploaderRouter(app);
bannerRouter(app);
loginRouter(app);
webApiRouter(app);

app.listen(8000, 'localhost', () => {
    console.log('app is running at http://localhost:8000');
});

