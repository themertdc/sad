const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`Eralp232's Client Archive | Discord Bot Bilgi Tablosu`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"    )
    .setDescription(
      `📯 Eralp232's Client Archive Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `📗 **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n 📗 **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n 📗 **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Yetkili Bilgi**__",
      "👑 **Sunucu Sahipleri**  <@586822327568695317> \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `🥽 **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n 🦺  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `🩱 \`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🎓  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🎓 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🎓 \`${prefix}iletişim\` | Eralp232's Client Archive İletişim Bilgileri.`
    ); 
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};
