const router = require('express').Router();

const { getMockData } = require('../controllers/mock.controller');

router.get('/mock/:name', getMockData);

module.exports = router;