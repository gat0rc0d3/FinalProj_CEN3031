
// index.js

const router = require('express').Router();

const tickerRoutes = require('./tickers');

router.use('/api/tickers', tickerRoutes);

module.exports = router;
