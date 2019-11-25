// tickers.js

const router = require('express').Router();

const tickersController = require('../controllers/tickersController');

router
	.route('/')
	.get(tickersController.findAll)
	.post(tickersController.create);

router
	.route('/:id')
	.get(tickersController.findById)
	.put(tickersController.update)
	.delete(tickersController.remove);

module.exports = router;
