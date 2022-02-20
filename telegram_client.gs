function sendMessageReply(message, reply_id) {
  let text = encodeURIComponent(message);
  let url = `${TELEGRAM_API}?chat_id=${CHAT_ID}&text=${text}&parse_mode=HTML&reply_to_message_id=${reply_id}`;
  let response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  let { ok, description } = JSON.parse(response);
  if (ok !== true) {
  Logger.log(`Error: ${description}`);
  } else {
    Logger.log('Send success');
  } 
}
