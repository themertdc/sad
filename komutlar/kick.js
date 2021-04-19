const Discord = require('discord.js')
const client = new Discord.Client()
exports.run = (client, message, args) => {
  let emoji = client.emojis.get('740278075261976628')
    
let ayarlar = require('../ayarlar.json')
  let uye = message.mentions.members.first() 
   let sebep = args[1] ||'Belirtilmemiş' 
  let log = ayarlar.log
  if(!uye) return message.channel.send('Atılacak bir üye etiketlemelisin.')
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmaya yetkin yok.')
  uye.kick()
  let embed = new Discord.RichEmbed()
  .setTitle(` ${emoji} Bir Üye Sunucudan Atıldı ${emoji} `)
  .setDescription(`
  • Atılan Üye ${uye} \`{ ${uye.id} }\`
  • Atan Yetkili ${message.author} \`{ ${message.author.id} }\`
  • Atılma Sebebi \`${sebep}\`
  `)
  .setTimestamp()
  .setFooter('Atılma Tarihi')
let emob = new Discord.RichEmbed()
  .setDescription(`${emoji} **Kullanıcı başarıyla sunucudan atıldı <#${log}> kanalından detaylarına ulaşabilirsiniz.**`)
  message.channel.send(emob).then(msg => msg.delete(6003))
  client.channels.get(log).send(embed)

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kick'],
  permLevel: 0
};

exports.help = {
  name: 'at'
};
//splashen