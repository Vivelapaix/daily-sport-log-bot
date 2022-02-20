function sendTodayTraining() {
  var days = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'};

  let gym_workout = {
      1: [42],
      2: [43],
      4: [44],
      5: [45]
  };

  let morning_workout = {
      0: [81],
      1: [81],
      2: [81],
      3: [81],
      4: [81],
      5: [81],
      6: [81]
  }

  var now = new Date();
  let today = now.getDay()

  if (today in gym_workout) {
      gym_workout[today].forEach((e) => {
      var message = `Today gym workout`;
      sendMessageReply(message, e);
    });
  }


  if (today in morning_workout) {
    morning_workout[today].forEach((e) => {
      var message = `Today morning workout`;
      sendMessageReply(message, e);
    });
  }
 
}

