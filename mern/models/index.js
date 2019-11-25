// models/index.js

const mongoose = require('mongoose');
const URI = require('../config/index');

mongoose.connect(process.env.MONGODB_URI || URI);

mongoose.connection.on('connected', () => {
	console.log('Established connection to mongoose!');
});

mongoose.connection.on('error', err => {
	console.log('Error connecting to mongoose (default): ' + err);
});
