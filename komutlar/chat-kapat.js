const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let HERKESS = message.guild.roles.find(r => r.name === "@everyone");
  let emoji = client.emojis.get("775820418493055016");
  message.channel.overwritePermissions(HERKESS, { SEND_MESSAGES: false });
  const embo = new Discord.RichEmbed().setDescription(
    `${emoji}  **Sohbet kanalı başarıyla kapatıldı.**`
  );
  message.channel.send(embo);
};

exports.conf = {
  enabled: true,
  aliases: ["chat-kapat", "kapat"]
};

exports.help = {
  name: "sohbet-kapat"
};
