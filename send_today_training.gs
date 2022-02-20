function sendTodayTraining() {
  reply_messages_with_training = [42, 43, 44, 45];  
  reply_messages_with_training.forEach((e) => {
    var message = `Today training`;
    sendMessageReply(message, e);
  }); 
}
