# Telegram Bot Message Sender - Express.js App

This is a simple Express.js application that provides an endpoint to send messages to a specific chat using a Telegram bot. The bot's token is stored securely in a `.env` file, and the `chatId` and `message` are passed as URL parameters.

## Features

- Sends messages to a Telegram chat via a bot
- Uses the Telegram Bot API
- Endpoint accepts `chatId` and `message` as URL parameters
- Bot token is securely stored in a `.env` file

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- A [Telegram Bot](https://core.telegram.org/bots#botfather) with a valid token
- GitHub repository for project management

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up the .env file:**
   In the root of your project, create a .env file and add your Telegram bot token:
   ```bash
   TELEGRAM_BOT_TOKEN=your-bot-token
4. **Start the server:**
   Run the following command to start the Express server:
   ```bash
   npm start
5. **To send a telegram message:**
   ```bash
   http://localhost:3000/api/send-message?chatId=<CHAT_ID>&message=<YOUR_MESSAGE>
   ```
   Replace <CHAT_ID> with the ID of the chat or user you want to send the message to.
   Replace <YOUR_MESSAGE> with the text message you want to send.
