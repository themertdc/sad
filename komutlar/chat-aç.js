const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let HERKESS = message.guild.roles.find(r => r.name === "@everyone");
  let emoji = client.emojis.get("775820418493055016");
  message.channel.overwritePermissions(HERKESS, { SEND_MESSAGES: null });
  const embo = new Discord.RichEmbed().setDescription(
    `${emoji} **Sohbet kanalı başarıyla açıldı.**`
  );
  message.channel.send(embo);
};

exports.conf = {
  enabled: true,
  aliases: ["chat-aç", "aç"]
};

exports.help = {
  name: "sohbet-aç"
};
