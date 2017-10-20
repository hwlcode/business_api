import * as express from 'express';
import * as path from 'path';

const app = express();

app.listen(8000, 'localhost', () =>{
    console.log('app is running at http://localhost:8000');
});

