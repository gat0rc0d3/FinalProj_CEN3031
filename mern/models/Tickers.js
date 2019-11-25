// Books.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tickerSchema = new Schema({
	prev_close: {
		type: String,
		required: true
	},
	open: {
		type: String,
		required: true
	},
	bid: {
		type: String,
		required: true
	},
	ask: {
		type: String,
		required: true
	},
	range: {
		type: String,
		required: true
	},
	52: {
		type: String,
		required: true
	},
	vol: {
		type: String,
		required: true
	},
	avg_vol: {
		type: String,
		required: true
	},
	market: {
		type: String,
		required: true
	},
	beta: {
		type: String,
		required: true
	},
	pe: {
		type: String,
		required: true
	},
	eps: {
		type: String,
		required: true
	}
});

const Ticker = mongoose.model('Ticker', tickerSchema);

module.exports = Ticker;
