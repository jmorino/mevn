'use strict';

import express from 'express';
import cors from 'cors';
import serveStatic from './static';
import { router } from './api';


const app = express();

app.use('/', serveStatic());
app.use('/api', cors(), router);


app.listen(3000, () => {
	console.log('server listening on port 3000...');
});
