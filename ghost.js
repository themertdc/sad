const Discord = require("discord.js");
const client = new Discord.Client();//Ghost
const chalk = require("chalk");//Ghost
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");//Ghost
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);//Ghost

client.ayarlar = { "token": "ODAzMjczNzk4NDU4NTQwMDgz.YA7ZBQ.EhVgRqeWa-rFLwma1uneI7T_vKs", "prefix": "!", "sahip": "743543409196793946" }// Token , Sahip ID , Prefix buraya giriliyor 

const app = express();
app.get("/", (request, response) => {
  console.log();
  response.sendStatus(200);
});//Ghost
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);//Ghost
//Ghost
var prefix = client.ayarlar.prefix;
//Ghost
const log = message => {
  console.log(`${message}`);
};//Ghost

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./ghostkomutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {//Ghost
    let props = require(`./ghostkomutlar/${f}`);
    log(`Yüklenen komut: ${client.ayarlar.prefix}${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });//Ghost
  });
});
//Ghost
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {//Ghost
      delete require.cache[require.resolve(`./ghostkomutlar/${command}`)];
      let cmd = require(`./ghostkomutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//Ghost
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });//Ghost
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//Ghost
client.load = command => {
  return new Promise((resolve, reject) => {
    try {//Ghost
      let cmd = require(`./ghostkomutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {//Ghost
        client.aliases.set(alias, cmd.help.name);
      });//Ghost
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//Ghost
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {//Ghost
      delete require.cache[require.resolve(`./ghostkomutlar/${command}`)];
      let cmd = require(`./ghostkomutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//Ghost
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};//Ghost

client.elevation = message => {
  if (!message.guild) {
    return;
  }//Ghost
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 2;  
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};//Ghost

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g

client.login(client.ayarlar.token);

client.on('ready', async () => {
client.user.setActivity(`Ticket Tool Altyapı`, { type : 'WATCHING' })
client.user.setStatus('watch')
})//Ghost