const express = require('express');
const router = express.Router();
const aicontroller = require('../controllers/ai.controller');   

const aiService = require('../services/ai.service');

router.post('/get-response', aicontroller.getReview);

module.exports = router;