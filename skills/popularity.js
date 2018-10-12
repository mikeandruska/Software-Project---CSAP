module.exports = function (controller) {

    controller.hears(['popularity'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask('For which domain would you like to view the popularity?', function (response, convo) {
				var spawn = require('child_process').spawn;
				var pythonProcess = spawn('/usr/bin/python', ['/Users/mandrusk/soft_proj/botkit-ciscospark-samples/template/skills/popularity.py', response.text]);

				pythonProcess.stdout.on('data', function (data) {
					var output = data.toString('utf-8');
					convo.say(output);
					convo.next();
				});
            });
        });
    });
};
