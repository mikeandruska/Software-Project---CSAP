//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, "help") + ": view help menu";
        text += "\n- " + bot.enrichCommand(message, "categories") + ": filter top 1000 most popular domains based on category";
        text += "\n- " + bot.enrichCommand(message, "rip_score") + ": view malicious reputation score for a domain [0 - benign, 100 - malicious]";
        text += "\n- " + bot.enrichCommand(message, "popularity") + ": view popularity of a domain [0 - least popular, 100 - most popular]";
        bot.reply(message, text);
    });
}
