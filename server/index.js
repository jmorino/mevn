'use strict';

import path from 'path';
import express from 'express';


const app = express();

app.use('/', express.static(path.resolve(__dirname, 'static'), { index: ['index.html'] }));

app.get('/api', (req, res, next) => {
	res.send('OK');
});


app.listen(3000, () => {
	console.log('server listening on port 3000...');
});