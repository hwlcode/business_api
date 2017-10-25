import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'

import {productRouter} from './router'
import {uploaderRouter} from './router/upload'
import {bannerRouter} from './router/banner'

const app = express();

//middleware
app.use('/', express.static(path.join(__dirname, '..', 'public'))); //静态资源存放目录
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//router
productRouter(app);
uploaderRouter(app);
bannerRouter(app);

app.listen(8000, 'localhost', () => {
    console.log('app is running at http://localhost:8000');
});

