var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config(); 

const token = process.env.TELEGRAM_BOT_TOKEN;;

// Function to send a message via Telegram Bot
async function sendTelegramMessage(chatId, message) {
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
  
  try {
    const response = await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: message
    });
    
    console.log("Message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.response ? error.response.data : error.message);
  }
}

// Example usage:
// Replace with your bot token


/* GET users listing. */
router.get('/send-message', async (req, res) => {
  const { chatId, message } = req.query; 
  try {
    const result = await sendTelegramMessage(chatId, message);
    res.status(200).send('Message sent: ' + JSON.stringify(result));
  } catch (error) {
    res.status(500).send('Failed to send message: ' + error.message);
  }
});

module.exports = router;
