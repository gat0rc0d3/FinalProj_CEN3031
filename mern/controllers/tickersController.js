// tickersControllers.js
const Ticker = require('../models/Tickers');


module.exports = {
	findAll: function(req, res) {
		Ticker.find(req.query)
			.then(tickers => res.json(tickers))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Ticker.findById(req.params.id)
			.then(ticker => res.json(ticker))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Ticker.create(req.body)
			.then(newTicker => res.json(newTicker))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Book.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(ticker => res.json(ticker))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Ticker.findById({ _id: req.params.id })
			.then(ticker => ticker.remove())
			.then(alltickers => res.json(alltickers))
			.catch(err => res.status(422).json(err));
	}
};
