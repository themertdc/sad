const Discord = require('discord.js')
const vcodes = require("vcodes.js");
module.exports.run = async (client,message,args) => {
   if(!args[0]) return message.channel.send("Error: Please write bot id.");
   let b = await vcodes.info(args[0]);
   if(b.error) return message.channel.send("Error: "+b.message);
   let website = b.website ?  " | [Website]("+b.website+")" : "";
   let github = b.github ? " | [Github]("+b.github+")" : "";
   let discord = b.support ? " | [Support Server]("+b.support+")" : "";
   let coowner;
   if(!b.coowners.length <= 0) {
     coowner = b.coowners.map(a => "<@"+a+">").join("\n");
   } else {
     coowner = "";
   }
   const embed = new Discord.MessageEmbed()
   .setThumbnail(b.avatar)
   .setAuthor(b.username+"#"+b.discrim, b.avatar)
   .setDescription("**[Vote for the bot named "+b.username+"#"+b.discrim+" in vCodes.](https://vcodes.xyz/bot/"+b.botID+"/vote)**")
   .addField("ID", b.botID, true)
   .addField("Username", b.username, true)
   .addField("Discriminator", b.discrim, true)
   .addField("Votes", b.votes, true)
   .addField("Certificate", b.certificate, true)
   .addField("Short Description", b.shortDesc, true)
   .setColor("#7289da")
   .addField("Private URL", `${b.privateURL ? "@"+b.privateURL : "None"}`, true)
   .addField("Owner(s)", `<@${b.ownerID}>\n${coowner.replace("<@>", "")}`, true)
   .addField("Links", `[Invite](https://discord.com/oauth2/authorize?client_id=${b.botID}&scope=bot&permissions=8)${website}${discord}${github}`, true)
   .setFooter("</> with vcodes.js npm module.");
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "bot-info",
    description: "",
    usage: ""
  };