const TelegramBot = require('node-telegram-bot-api');

const token = '8593461177:AAHmikhJtAed4e_S-pk4sNbAng5f-8p0J6s';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🔥 Bienvenue sur TECH.REWARDS

⚡ Boutique premium
💎 Récompenses exclusives
🛡 Support 24/7

👇 Ouvre la boutique ci-dessous`,
{
reply_markup: {
inline_keyboard: [
[
{
text: '🛒 OUVRIR LA BOUTIQUE',
url: 'https://servicerecup38-creator.github.io/Techofficiel/'
}
],
[
{
text: '💬 SUPPORT',
url: 'https://t.me/contactgrenoble_cityfarms'
}
]
]
}
});
});
