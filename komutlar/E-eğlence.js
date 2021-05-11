const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`Rage Anarchy | Eğlence`)
    .setTitle(``)
    .setColor(`BLACK`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/823592301796392960/826048182990667806/standard_2.gif"
    )
    .setDescription(
      `🔔 Rage Anarchy  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Steam Oyun__`,
      `📯 \`${prefix}steamoyun [Oyun]\` Yazdıgınız Oyunun Steamdaki Bilgileri Verir.`,
      true
    )
    .addField(
      `__Minecraft Ödül__`,
      `📯 \`${prefix}mcödül \` Yazdıgınız Cümleyi Minecraft Ödüle Aktarır.`,
      true
    )
    .addField(
      `__TKM__`,
      `📯 \`${prefix}tkm [Seçtigin] \` Botla Taş , Kağıt Ve Makas Oynarsın.`,
      true
    )
    .addField(
      `__Kasa Aç__`,
      `📯 \`${prefix}kasaaç \` CS:GO Kasası Açar.`,
      true
    )
    .addField(
      `__Trump Tweet__`,
      `📯 \`${prefix}trumptweet [Yazı] \` Trump Yazı Yazdırırsın.`,
      true
    )
    .addField(
      `__Zar At__`,
      `📯 \`${prefix}zarat \` 1 'den 5 kadar Zar Atar.`,
      true
    )
  .addField(
      `__Deste Aç__`,
      `📯 \`${prefix}desteaç \` Zula Deste Kasası Açar.`,
      true
    )
   .addField(
      `__Minecraft Skin__`,
      `📯 \`${prefix}mcskin \` Minecraft Skini Arar.`,
      true
    )
   .addField(
      `__Ata Sözü__`,
      `📯 \`${prefix}atasözü \` Ata Sözü Söyler.`,
      true
    )
  .addField(
      `__Ara155__`,
      `📯 \`${prefix}ara155 \` Polisi Ararsınız.`,
      true
    )
  .addField(
      `__Ali Vefa__`,
      `📯 \`${prefix}alivefa \` Sunucuda AliVefa Sen Olursun.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `📙 \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📙 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz`
    );
  return message.channel.send(embedeğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Eğlence Menüsü",
  usage: "eğlence"
};
