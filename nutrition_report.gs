function sendTodayNutritionReport() {
  reply_messages_with_training = [57];  
  reply_messages_with_training.forEach((reply_id) => {
    var message = `Приложите в комментарии отчет о питании в виде скриншота приложения FatSecret`;
    sendMessageReply(message, reply_id);
  }); 
}
