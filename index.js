//Date started: 12/30/19
 
const { Client, Collection } = require("discord.js");
const { token } = require("./config.json");
const bot = new Client();

bot.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send('Welcome to the discord server.')
});

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(token);