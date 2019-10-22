'use strict';

import path from 'path';
import express from 'express';


export default () => {
	if (process.env.NODE_ENV === 'development') {
		return (req, res, next) => {
			res.send('No static data in dev mode');
		}
	}
	else {
		return express.static(path.resolve(__dirname, 'static'), { index: ['index.html'] });
	}
}