module.exports = function (controller) {

    controller.hears(['rip_score'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {

            convo.ask('What domain would you like to score?', function (response, convo) {
				var spawn = require('child_process').spawn;
				var pythonProcess = spawn('/usr/bin/python', ['/Users/mandrusk/soft_proj/botkit-ciscospark-samples/template/skills/rip_score.py', response.text]);

				pythonProcess.stdout.on('data', function (data) {
					var output = data.toString('utf-8');
					convo.say(output);
					convo.next();
				});
            });
        });
    });
};
