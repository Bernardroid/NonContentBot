const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var artChannel = "553776540362473512";

client.on('message', msg => {

	if(msg.channel.id != artChannel)
	{
		//console.log(msg.channel.id);
		//console.log(artChannel);
		return;
	}
	
	if(msg.attachments.size > 0 || msg.embeds.length > 0)
	{
		//Do nothing
	}
	else
	{
		//msg.channel.send('imma delete this');
		msg.delete();
	}

}, 100);

