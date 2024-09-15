var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config(); 

const controller = require('../controller/send-message');
// Example usage:
// Replace with your bot token


/* GET users listing. */
router.get('/send-message', controller.sendMessage);

module.exports = router;
