const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
let log = message.mentions.channels.first()
if (!log) return message.channel.send(`Kanal Belirt`)

data.set(`log.${message.guild.id}`, log.id); return message.channel.send(`Kanal Başarıyla ${log} Olarak Ayarlandı`)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "log"
};
