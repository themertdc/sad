const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Eralp232's Client Archive  | OtoRol Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `🟣 Eralp232's Client Archive  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__OtoRol__**`,
      `💝 \`${prefix}otorol\` \n OtoRolü Nasıl Ayarlayacagınız Hakkında Bilgi Tablosu.`,
        true
    )
  .addField(
      `**__OtoRol Msg__**`,
      `💝 \`${prefix}otorol-msg\` \n Sunucunuza Özel Otorol Msg Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Ayarla__**`,
      `💝 \`${prefix}oto-rol-ayarla\` \n OtoRol Mesaji Gidecegi Kanalı Ve Rölü Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Kapat__**`,
      `💝 \`${prefix}otorol-kapat\` \n Tüm OtoRol Ayalarını Sıfırlarsınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `©️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ©️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ©️ \`${prefix}iletişim\` | Eralp232's Client Archive  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"otorol-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
