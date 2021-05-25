const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//alkanXcode
  let yetkiliROL = ayarlar.yetkiliROL
  let kişi = message.mentions.users.first() || message.member
let erkek = db.fetch(`erkek_${kişi.id}_${message.guild.id}`) || 0
let kız = db.fetch(`kız_${kişi.id}_${message.guild.id}`) || 0
let toplam = erkek+kız
var embed = new Discord.MessageEmbed()
.setDescription(`
●▬▬▬▬▬▬▬ <a:EmojiGifM3L1H158:846832285226369084> **Kayıt İstatistikleri** <a:EmojiGifM3L1H158:846832285226369084> ▬▬▬▬▬▬▬▬▬●

                • Yetkili • **${kişi}**
                • Toplam Üye Kayıt Sayısı • **${toplam}**
                • Toplam Erkek Kayıt Sayısı • **${erkek}**
                • Toplam Kadın Kayıt Sayısı • **${kız}**
               

●▬▬▬▬▬▬▬ <<a:EmojiGifM3L1H158:846832285226369084> **Kayıt  İstatistikleri** <a:EmojiGifM3L1H158:846832285226369084> ▬▬▬▬▬▬▬▬▬●




`)
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};//alkanXcode