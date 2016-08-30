// MNR Hubot

var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send.
  // If the user enters hi or hello the bot responds "Greetings, presumed Human."
  // (Note: .hear does the same thing as .respond, apparently).
  robot.respond(/hi|hello/i, function(res) {
    return res.send("Greetings, presumed Human.");
  });

  // Example of using the .random method
  robot.respond(/ship it/i, function(res) {
    return res.send(res.random(squirrels));
  });

  // Example of using a conditional to change the output
  robot.respond(/open the (.*) doors/i, function(res) {
    var doortype = res.match[1];
    if (doortype === "pod bay") {
      res.reply("I'm afraid I can't let you do that.");
    } else {
      res.reply("Opening " + doortype + " doors.");
    }
  });
}

