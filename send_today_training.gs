function sendTodayTraining() {
  var days = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'};

  let training_number_with_reply_message_id = {
      1: [42],
      2: [43],
      4: [44],
      5: [45]
  };

  var now = new Date();
  let today = now.getDay()

  if (today in training_number_with_reply_message_id) {
      training_number_with_reply_message_id[today].forEach((e) => {
      var message = `Today training`;
      sendMessageReply(message, e);
    });
  }
 
}

