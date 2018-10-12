module.exports = function (controller) {

    controller.hears(['categories'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('These are the categories of popular domains.');
	
			var spawnSync = require('child_process').spawnSync;
			var cat = spawnSync('/usr/bin/python', ['/Users/mandrusk/soft_proj/botkit-ciscospark-samples/template/skills/categories.py']);
			var output = cat.stdout.toString('utf-8');
			convo.say(output);	
			convo.next();

            convo.ask('What would you like to filter the results on? Please enter a number.', function (response, convo) {
				var spawn = require('child_process').spawn;
				var pythonProcess = spawn('/usr/bin/python', ['/Users/mandrusk/soft_proj/botkit-ciscospark-samples/template/skills/filter.py', response.text]);

				pythonProcess.stdout.on('data', function (data) {
					var output = data.toString('utf-8');
					convo.say(output);
					convo.next();
				});
            });
        });
    });
};
