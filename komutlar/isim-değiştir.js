const discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`);
  
let ghostcreative = message.mentions.members.first()
if (!ghostcreative) return message.channel.send(`Bir kullanıcı etiketlemelisin.`)

let isim = args.slice(1).join(' ')
if (!ghostcreative) return message.channel.send(`Değiştirilicek ismi girin.`)

ghostcreative.setNickname(isim)
message.channel.send(`${ghostcreative} Adlı Kullanıcının Yeni İsmi **${isim}\** Olarak Ayarlandı!`)
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: '',
  description: 'isim-değiştir'
}
