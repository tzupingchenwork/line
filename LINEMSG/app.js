// 引用linebot SDK
const linebot = require('linebot');

// 用於辨識Line Channel的資訊
const bot = linebot({
  channelId: '1653755925',
  channelSecret: 'c65de13f277d108cb8861d228399049a',
  channelAccessToken:
    'BV52++OTh72M4Vwj5uSD+pJzUtw8z3XRXxYTrejOcdkOdcAlm7ulZe+SUsJhKoYaYCBMkigVHymdzepBpRQwntXyh15idps3iF+k0cg0y5Ia5QYsurwnBAozPgzKKj/ubYIRDkzxVHOMdsHRUCJmUgdB04t89/1O/w1cDnyilFU='
})

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `你剛剛說的是:${event.message.text}我就爛！你也爛！`;
  // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
      // 當訊息成功回傳後的處理
  }).catch(function (error) {
      // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
  console.log('[BOT已準備就緒]');
});
