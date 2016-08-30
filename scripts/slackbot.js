// MNR Hubot

var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Say hi or hello to the bot and get a response with a picture
  robot.respond(/hi|hello/i, function(msg) {
    var img = 'http://www.imagefully.com/wp-content/uploads/2015/07/Hello-Black-Font-Image.png';
    return msg.send("Hello you human, you! " + img);
  });

  // Say "Ship it" to get a random image
  // Example of using the .random method
  robot.respond(/ship it/i, function(res) {
    return res.send(res.random(squirrels));
  });

  // Say "open the ___ doors" and get a reply depending on whether ____ is "pod bay" or something else
  // Example of using a conditional to change the output
  robot.respond(/open the (.*) doors/i, function(res) {
    var doortype = res.match[1];
    if (doortype === "pod bay") {
      res.reply("I'm afraid I can't let you do that.");
    } else {
      res.reply("Opening " + doortype + " doors.");
    }
  });

  // Say "My name is ____" and bot will greet you.
  robot.hear(/My name is (.*)/i, function(msg) {
    var res = msg.match[1];
    return msg.send('It is nice to meet you ' + res);
  });

  // Bot utters random greeting upon entering room
  var enterReplies = ['Hi', 'Hello there!', 'Oh! Hi!', 'Hello friend.', 'I see you'];

  robot.enter(function(msg) {
    var random = Math.floor(Math.random() * 6);
    return msg.send(msg.random(enterReplies));
  });

  // Say "It is cold/rainy/other" and see the bot say something in reply
  robot.hear(/It is (.*)/i, function(msg) {
    var res = msg.match[1];
    if(res === 'cold') {
      return msg.reply('Make Sure you have a jacket in this ' + res + ' day.');
    }
    if (res === 'rainy') {
      return msg.reply('You probabely need an umbrella for a ' + res + ' day.');
    }
    return msg.reply('I hope you have a wonderful ' + res + ' day.');
  });
}

