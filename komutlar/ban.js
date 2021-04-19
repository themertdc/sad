const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = (client, message, args) => {
  let emoji = client.emojis.get('740278075261976628')
let ayarlar = require('../ayarlar.json')

  let uye = args[0]
  let sebep = args[1] || 'Belirtilmemiş' 
  let log = ayarlar.log
  if(!uye) return message.channel.send('Sunucudan yasaklanacak bir üye belirtmelisin.')
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmaya yetkin yok.')
  const user = message.mentions.users.first();
  const member = message.guild.member(user);
  message.guild.ban(uye)
  let embed = new Discord.RichEmbed()
  .setTitle(` ${emoji} Bir Üye Sunucudan Yasaklandı ${emoji} `)
  .setDescription(`
  • Yasaklanan Üye ${uye.nickname} \`{ ${uye} }\`
  • Yasaklayan Yetkili ${message.author} \`{ ${message.author.id} }\`
  • Yasaklama Sebebi \`${sebep}\`
  `)
  .setTimestamp()
  .setFooter('Yasaklama Tarihi')
  client.channels.get(log).send(embed)
  let emob = new Discord.RichEmbed()
  .setDescription(`${emoji} **Kullanıcı başarıyla sunucudan yasaklandı <#${log}> kanalından detaylarına ulaşabilirsiniz.**`)
  message.channel.send(emob).then(msg => msg.delete(6003))
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banla'],
  permLevel: 0
};

exports.help = {
  name: 'ban'
};
//splashen