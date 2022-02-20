const getTelegramGroupsAndChannels = () => {
  // Type your Telegram Bot token here
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`;

  const response = UrlFetchApp.fetch(TELEGRAM_API);

  const { ok, result = [] } = JSON.parse(response);

  if (!ok) {
    throw new Error("Please check your API token again!");
  }

  if (result.length === 0) {
    throw new Error("Please add this bot to a Telegram group or channel!");
  }

  const telegramBotList = {};

  result.forEach((e) => {
    const { message, my_chat_member, channel_post } = e;
    const { chat } = { ...message, ...my_chat_member, ...channel_post };
    const { title, id, username } = chat;
    telegramBotList[id] = { chat_id: `${id}`, title: title || username };
  });

  Logger.log(Object.values(telegramBotList));
};
