// MNR Hubot

var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  robot.hear(/javascript/i, function(msg) {
    return msg.send("I love JavaScript!");
  });
  robot.hear(/Hello!/i, function(res) {
    return res.send("Hi there!");
  });
  /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
  robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });
  robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
  robot.respond(/open the (.*) doors/i, function(res) {
    var doortype = res.match[1];
    if (doortype === "pod bay") {
      res.reply("I'm afraid I can't let you do that.");
    } else {
      res.reply("Opening " + doortype + " doors.");
    }
  });
}

  // # robot.hear /badger/i, (res) ->
  // #   res.send "Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"
  // #
  // # robot.respond /open the (.*) doors/i, (res) ->
  // #   doorType = res.match[1]
  // #   if doorType is "pod bay"
  // #     res.reply "I'm afraid I can't let you do that."
  // #   else
  // #     res.reply "Opening #{doorType} doors"